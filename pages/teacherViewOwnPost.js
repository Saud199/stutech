import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form,CardItem, Button, Item, Picker, Input, Icon, Label, Textarea, Text, ListItem, List } from 'native-base';
import firebase from '../config/firebase.js';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';

class TeacherViewOwnPost extends Component {

  constructor(props) {
    super();
    this.state = {
        myPost : []
    }
  }

  viewMyPost() {
    const {myPost} = this.state;

    var data = this.props.details;

    firebase.database().ref("Jobs").orderByChild("cemail").equalTo(""+data.email).on("value", (snapshot)=> {
        snapshot.forEach((childSnapshot)=> { 
            var sub = childSnapshot.val().subject;
            var detail = childSnapshot.val().detail;
            var jcategory = childSnapshot.val().category;
            var date = childSnapshot.val().date;
            var type= childSnapshot.val().jobType;
            var experience = childSnapshot.val().workType;
            var img =childSnapshot.val().image;


            var vPost = {
                mySubject : sub , 
                myDetails : detail , 
                myCategory : jcategory , 
                myDate : date,
                myType : type,
                myExperience : experience,
                myImg : img

            }
            myPost.push(vPost);
            this.setState({myPost})
        }) 
    })
  }

  componentDidMount() {
    this.viewMyPost();
  }

  render() {
    const {myPost} = this.state;
    return (

      <Container>

        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate('TeacherComplaints')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>
          <Right />
        </Header>

      <Content padder style={{ padding: 7 }}>

        <Form>

          <Text style={{ alignSelf: 'center', fontSize: 20}}>MY POSTS</Text>
          <Text>{"\n"}</Text>

          { myPost.map((val,ind) => {
            return(
              <List>
                <CardItem cardBody>
                <Image source={{uri : val.myImg}} style={{height: 200, width: null, flex: 1, resizeMode:'contain', marginTop:15, marginBottom:8}}/>
                </CardItem>

                <ListItem style={{flexDirection:'column'}}>
                  <Text style={{alignSelf:'flex-start', fontWeight:'bold'}}>Subject : <Text style={{fontWeight:'normal'}}>{val.mySubject}</Text></Text>
                  
                  <Text style={{alignSelf:'flex-start', fontWeight:'bold'}}>Details : <Text style={{fontWeight:'normal'}}>{val.myDetails}</Text></Text>
                 
                  <Text style={{alignSelf:'flex-start', fontWeight:'bold'}}>Category : <Text style={{fontWeight:'normal'}}>{val.myCategory}</Text></Text>
                  
                  <Text style={{alignSelf:'flex-start', fontWeight:'bold'}}>Date     : <Text style={{fontWeight:'normal'}}>{val.myDate}</Text></Text>
               
                  <Text style={{alignSelf:'flex-start', fontWeight:'bold'}}>Type     : <Text style={{fontWeight:'normal'}}>{val.myType}</Text></Text>
            
                  <Text style={{alignSelf:'flex-start', fontWeight:'bold'}}>Experienced : <Text style={{fontWeight:'normal'}}>{val.myExperience}</Text></Text>
                </ListItem>

              </List>

            )
          })

          }

        </Form>

      </Content>
      

    </Container>

    );
  }
  
}


function mapStateToProp(state) {
    return ({
      details: state.root. teacherInfo ,
      accounttype : state.root.accountType
    })
  }
  function mapDispatchToProp(dispatch) {
    return ({
        //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
    })
  }
  
  export default connect(mapStateToProp, mapDispatchToProp)(TeacherViewOwnPost);