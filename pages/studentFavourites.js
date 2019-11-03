import React, {Component} from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import firebase from '../../../config/firebase.js'
import { connect } from 'react-redux';

class StudentFavourites extends Component {

    constructor() {
        super();

        this.state ={
          favouritesArray : []
        }
    
    }

    displayFavourites() {
        const {favouritesArray} = this.state;

        // favouritesArray.push({name : 'SSUET' , image : require('../images/ssuet.png')});
        // favouritesArray.push({name : 'Oracle' , image : require('../images/oracle.png')});
        // favouritesArray.push({name : 'Decima' , image : require('../images/decima.png')});
        // favouritesArray.push({name : 'App Bakers' , image : require('../images/ssuet.png')});

        var data = this.props.details;

        firebase.database().ref(`Favourite/${data.rollNo}`).on("value", (snapshot)=> {
          if(snapshot.exists()){
           snapshot.forEach((childSnapshot)=> {
            var d = childSnapshot.val();
            var obj = {
            id : d.id ,
            logo : d.logo ,
            Jimg : d.Jimg ,
            orgName : d.orgName ,
            description : d.description ,
            date : d.date ,
            experience : d.experience,
            type : d.type ,
            cid : d.cid ,
            category : d.category ,
            subject : d.subject
           }
           favouritesArray.push(obj);
           this.setState({favouritesArray})
           })
          }
         })

    }

    deleteFavorite(i) {
      const {favouritesArray} = this.state;
      var data = this.props.details;
      
      
    }

    componentDidMount() {
      this.displayFavourites();
    }


  render() {
    const {favouritesArray} = this.state;
    this.displayFavourites();
    return (

      <Container>

        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate('StudentNewsFeed')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>
          <Right />
        </Header>


        <Content>


        { favouritesArray.map((val , ind) => {
            return(

           
          
                <Card>
                  <CardItem>
                    <Left>
                      <Thumbnail source={val.image} />
                      <Body>
                        <Text>{val.name}</Text>
                        <Text note>GeekyAnts</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={val.image} style={{height: 200, width: null, flex: 1}}/>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button block style={{backgroundColor: '#14c2e0' , width : 120}}><Text>Profile</Text></Button>
                    </Left>
                    <Right>
                      <Button block style={{backgroundColor: '#14c2e0' , width : 120}}><Text>Delete</Text></Button>
                    </Right>
                  </CardItem>
                </Card>
                
                
      
                 )
                })
        }


        </Content>


      </Container>

    );
  }
  
}


function mapStateToProp(state) {
  return ({
    details: state.root.studentInfo ,
    accounttype : state.root.accountType
  })
}
function mapDispatchToProp(dispatch) {
  return ({
      //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(StudentFavourites);