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


                <Text style={{fontWeight:'bold', marginTop:12, marginBottom : 10}}>Completion Date : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.CompletionDate}</Text></Text>

                <Text style={{fontWeight:'bold', marginBottom : 10}}>Organization Name : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.orgName}</Text></Text>

                <Text style={{fontWeight:'bold', marginBottom : 10}}>Organization Web : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.orgLink}</Text></Text>

                <Text style={{fontWeight:'bold', marginBottom : 10}}>Achieved Skills : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.gettingSkills}</Text></Text>

                <Text style={{fontWeight:'bold', marginBottom : 10}}>Speciality : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.speciality}</Text></Text>

                <Text style={{fontWeight:'bold', marginBottom : 10}}>Degree Type : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.type}</Text></Text>

                <View style={{borderBottomColor:'black',borderBottomWidth:1}}></View>

                <Text style={{fontWeight:'bold', marginTop : 10}}>Certification Details :-</Text>
                <Text style={{fontWeight:'normal', marginBottom :12}}>{this.props.achieveDetails.cerDetails}</Text>



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
