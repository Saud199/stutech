import React, {Component} from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail, Card, CardItem} from 'native-base';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';


class StudentViewOtherAchievementDetail extends Component {

    constructor() {
        super();
    
    }



  render() {
    return (

      <Container>

        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate('StudentViewOtherAchievements')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>
          <Right />
        </Header>


        <Content padder style={{ padding: 7 }}>
                <Text style={{alignSelf:'center'}}>{this.props.achieveDetails.name} ({this.props.achieveDetails.rollNo})</Text>
                <Text style={{alignSelf:'center', color:'#14c2e0'}}>{this.props.achieveDetails.Speciality}</Text>
                <Text>{"\n"}</Text>
                <CardItem cardBody>
                    <Image source={{uri : this.props.achieveDetails.image}} style={{height: 200, width: null, flex: 1, resizeMode:'contain'}}/>
                </CardItem>

                <Text>{"\n"}</Text>

                <View style={{borderBottomColor:'black',borderBottomWidth:1}}></View>


                <Text style={{fontWeight:'bold'}}>Completion Date : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.completeDate}</Text></Text>
                <Text>{"\n"}</Text>

                <Text style={{fontWeight:'bold'}}>Organization Name : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.orgName}</Text></Text>
                <Text>{"\n"}</Text>

                <Text style={{fontWeight:'bold'}}>Organization Web : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.webLink}</Text></Text>
                <Text>{"\n"}</Text>

                <Text style={{fontWeight:'bold'}}>Skills : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.skills}</Text></Text>
                <Text>{"\n"}</Text>

                <Text style={{fontWeight:'bold'}}>Certificate Type : <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.certificateType}</Text></Text>

                <View style={{borderBottomColor:'black',borderBottomWidth:1}}></View>

                <Text style={{fontWeight:'bold'}}>Certification Details :-</Text>
                <Text style={{fontWeight:'normal'}}>{this.props.achieveDetails.certificateDetail}</Text>



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

export default connect(mapStateToProp, mapDispatchToProp)(StudentViewOtherAchievementDetail);
