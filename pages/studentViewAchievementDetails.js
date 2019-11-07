import React, {Component} from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail, Card, CardItem} from 'native-base';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';


class StudentViewAchievementDetails extends Component {

    constructor() {
        super();

        this.state ={
          descriptionArray : []
        }
    
    }

    // displayDescription() {
    //     const {descriptionArray} = this.state;

    //     // favouritesArray.push({name : 'SSUET' , image : require('../images/ssuet.png')});
    //     // favouritesArray.push({name : 'Oracle' , image : require('../images/oracle.png')});
    //     // favouritesArray.push({name : 'Decima' , image : require('../images/decima.png')});
    //     // favouritesArray.push({name : 'App Bakers' , image : require('../images/ssuet.png')});

    //     var data = this.props.postDetails;

    //     // firebase.database().ref(`Favourite/${data.rollNo}`).on("value", (snapshot)=> {
    //     //   if(snapshot.exists()){
    //     //    snapshot.forEach((childSnapshot)=> {
    //     //     var d = childSnapshot.val();
    //     //     var obj = {
    //     //     id : d.id ,
    //     //     logo : d.logo ,
    //     //     Jimg : d.Jimg ,
    //     //     orgName : d.orgName ,
    //     //     description : d.description ,
    //     //     date : d.date ,
    //     //     experience : d.experience,
    //     //     type : d.type ,
    //     //     cid : d.cid ,
    //     //     category : d.category ,
    //     //     subject : d.subject
    //     //    }
    //     //    favouritesArray.push(obj);
    //     //    this.setState({favouritesArray})
    //     //    })
    //     //   }
    //     //  })
    //     favouritesArray.push({name : 'App Bakers' , image : require('../images/ssuet.png')})
    // }

    // componentDidMount() {
    //   this.displayDescription();
    // }


  render() {
    const {favouritesArray} = this.state;
    return (

      <Container>

        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate('StudentAchievements')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>
          <Right />
        </Header>


        <Content padder style={{ padding: 7 }}>
                <Text style={{alignSelf:'center', color:'#14c2e0'}}>{this.props.achieveDetails.subject}</Text>
                <Text>{"\n"}</Text>
                <CardItem cardBody>
                    <Image source={{uri : this.props.achieveDetails.logo}} style={{height: 200, width: null, flex: 1, resizeMode:'contain'}}/>
                </CardItem>

                <Text>{"\n"}</Text>

                <View style={{borderBottomColor:'black',borderBottomWidth:1}}></View>


                <Text style={{fontWeight:'bold'}}>Completion Date : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.CompletionDate}</Text></Text>
                <Text>{"\n"}</Text>

                <Text style={{fontWeight:'bold'}}>Organization Name : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.orgName}</Text></Text>
                <Text>{"\n"}</Text>

                <Text style={{fontWeight:'bold'}}>Organization Web : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.orgLink}</Text></Text>
                <Text>{"\n"}</Text>

                <Text style={{fontWeight:'bold'}}>Achieved Skills : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.gettingSkills}</Text></Text>
                <Text>{"\n"}</Text>

                <Text style={{fontWeight:'bold'}}>Speciality : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.speciality}</Text></Text>
                <Text>{"\n"}</Text>

                <Text style={{fontWeight:'bold'}}>Degree Type : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.type}</Text></Text>

                <View style={{borderBottomColor:'black',borderBottomWidth:1}}></View>

                <Text style={{fontWeight:'bold'}}>Certification Details :-</Text>
                <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.cerDetails}</Text>



        </Content>


      </Container>

    );
  }
  
}


function mapStateToProp(state) {
  return ({
    details: state.root.studentInfo ,
    accounttype : state.root.accountType,
    achieveDetails : state.root.achievementInfo
  })
}
function mapDispatchToProp(dispatch) {
  return ({
      //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(StudentViewAchievementDetails);
