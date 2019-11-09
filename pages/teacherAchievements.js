import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, Tabs, Tab, ScrollableTab, Card, CardItem, List, ListItem, Thumbnail } from 'native-base';
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
import firebase from '../config/firebase.js';
import { connect } from 'react-redux';
import {DynamicData} from '../store/action/action.js';

class TeacherAchievements extends Component {

    constructor(props) {
        super();
        this.state = { 
          AchievementsArr:[],
          certificate : 'all' ,
          special : 'all'
        };
    }

    componentDidMount(){
      //this.validation();
      this.addData();
    }

    viewProfile(i){
      const {AchievementsArr} = this.state;
     
     var obj = {
       rollNo :  AchievementsArr[i].rollNo ,
       id : AchievementsArr[i].userid ,
       name : AchievementsArr[i].name ,
       email : AchievementsArr[i].email ,
       image : AchievementsArr[i].myimg
     }
     this.props.dInfo(obj)
     //this.props.history.push("/stuDynamicProfile")    NAVIGATION
   }
  
      

    addData() {
        const {AchievementsArr} = this.state;

        var data = this.props.details;

        firebase.database().ref("Achievements").on("value", (snapshot)=> {
          if(snapshot.exists()){
            this.setState({progress:false})
            snapshot.forEach((childSnapshot) => {
            var rdata = childSnapshot.val();
        
            var obj = {
              id : rdata.id ,
              image : rdata.image ,
              orgName : rdata.orgName ,
              certificateType : rdata.certificateType ,
              certificateDetail : rdata.certificeDetail ,
              completeDate : rdata.completeDate ,
              webLink : rdata.orgLink ,
              skills : rdata.skills ,
              Speciality : rdata.speciality ,
              subject : rdata.subject ,
              rollNo : rdata.rollNo ,
              email : rdata.email ,
              userid : rdata.userID ,
              name : rdata.userName ,
              myimg : rdata.myimg 
              }
             AchievementsArr.push(obj);
             this.setState({AchievementsArr})
        
          })
        }
         })
        
        
    }



  render() {
    const{AchievementsArr, certificate, special}=this.state;
    return (

      <Container>

        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate('TeacherNewsFeed')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>
          <Right />
        </Header>

      
          <Content style={{backgroundColor:'#D3D3D3'}}>
          { AchievementsArr.map((val , ind) => {
            return(
                
                <Card>
                  <CardItem cardBody>
                    <Image source={{uri:val.image}} style={{height: 200, width: null, flex: 1, resizeMode:'contain'}}/>
                  </CardItem>
                  <CardItem style={{alignSelf:'center', flexDirection:'column'}}>
                    <Text style={{color:'#14c2e0'}}>{val.Speciality}</Text>
                    <Text>{val.name}</Text>
                    <Text>{val.orgName}</Text>
                  </CardItem>
                  <CardItem>
                    <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Button transparent style={{width: 22, height: 22}}>
                        <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/info.png')} />
                      </Button>

                      <Button transparent style={{width: 22, height: 22}}>
                        <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/delete.png')} />
                      </Button>
                    </Body>
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
    details: state.root.teacherInfo ,
    accounttype : state.root.accountType
  })
}

function mapDispatchToProp(dispatch) {
  return ({
       dInfo : (info4)=>{ dispatch(DynamicData(info4))} 
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(TeacherAchievements);