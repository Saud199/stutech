import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, ListItem, List } from 'native-base';
import firebase from '../config/firebase.js';
import { connect } from 'react-redux';

class StudentViewOwnComplaints extends Component {

  constructor(props) {
    super();
    this.state = {
        myComplaints : []
    }
  }

  viewMyComplaints() {
    const {myComplaints} = this.state;

    var data = this.props.details;

    firebase.database().ref("StudentComplain").orderByChild("email").equalTo(""+data.email).on("value", (snapshot)=> {
        snapshot.forEach((childSnapshot)=> { 
            var sub = childSnapshot.val().subject;
            var det = childSnapshot.val().details;
            var idea = childSnapshot.val().step;
            var date = childSnapshot.val().date;

            var complaints = {
                mySubject : sub , 
                myDetails : det , 
                myIdea : idea , 
                myDate : date
            }
            myComplaints.push(complaints);
            this.setState({myComplaints})
        }) 
    })
  }

  componentDidMount() {
    this.viewMyComplaints();
  }

  render() {
    const {myComplaints} = this.state;
    return (

      <Container>

        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate('StudentComplaints')}>
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

          <Text style={{ alignSelf: 'center', fontSize: 20}}>MY COMPLAINTS</Text>
          <Text>{"\n"}</Text>

          { myComplaints.map((val,ind) => {
            return(
              <List>

                <ListItem style={{flexDirection:'column'}}>
                  <Text style={{alignSelf:'flex-start', fontWeight:'bold'}}>Subject : <Text style={{fontWeight:'normal'}}>{val.mySubject}</Text></Text>
                  <Text>{"\n"}</Text>
                  <Text style={{alignSelf:'flex-start', fontWeight:'bold'}}>Details : <Text style={{fontWeight:'normal'}}>{val.myDetails}</Text></Text>
                  <Text>{"\n"}</Text>
                  <Text style={{alignSelf:'flex-start', fontWeight:'bold'}}>Step Taken : <Text style={{fontWeight:'normal'}}>{val.myIdea}</Text></Text>
                  <Text>{"\n"}</Text>
                  <Text style={{alignSelf:'flex-start', fontWeight:'bold'}}>Date : <Text style={{fontWeight:'normal'}}>{val.myDate}</Text></Text>
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
      details: state.root. studentInfo ,
      accounttype : state.root.accountType
    })
  }
  function mapDispatchToProp(dispatch) {
    return ({
        //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
    })
  }
  
  export default connect(mapStateToProp, mapDispatchToProp)(StudentViewOwnComplaints);