import { withNavigation } from 'react-navigation';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Content, Button, ListItem, Left, Right,Thumbnail,Body, Icon} from 'native-base';
import firebase from '../config/firebase.js';
import { connect } from 'react-redux';

class TeacherSideBar extends Component {

  constructor(props){
    super(props);
  }

  logOff() {
    firebase.auth().signOut();
    this.props.navigation.navigate('Login');
  }

    render() {

        return(
    
            <Content style={{backgroundColor:'#ffffff'}}>

            <ListItem avatar onPress={()=> this.props.navigation.navigate('TeacherProfile')}>

            <Left>
                <Thumbnail source={{uri : this.props.details.imgURL}} />
            </Left>
                
            <Body>
                <Text>{this.props.details.name}</Text>
            </Body>
            
            </ListItem>

            <Text>{"\n"}</Text>



            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('TeacherViewCategories')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/categories1.png')} />
              </Left>
              <Body>
                <Text>Categories</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('TeacherNotification')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/notification.jpg')} />
              </Left>
              <Body>
                <Text>Notifications</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('TeacherAddJob')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/addjob.png')} />
              </Left>
              <Body>
                <Text>Add Job</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('TeacherComplaints')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/complaint.jpg')} />
              </Left>
              <Body>
                <Text>Complaint</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('TecaherViewOrganization')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/organization.jpg')} />
              </Left>
              <Body>
                <Text>Organizations</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('TeacherAchievements')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/achievements.jpg')} />
              </Left>
              <Body>
                <Text>Achievements</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('TeacherFavourites')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/favourite.jpg')} />
              </Left>
              <Body>
                <Text>Favourites</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('TeacherSecurity')}>
              <Left>
                <Thumbnail square style={{width: 25, height: 25}}  source={require('../images/security.png')} />
              </Left>
              <Body>
                <Text>Security</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.logOff()}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/logoff.jpg')} />
              </Left>
              <Body>
                <Text>Signout</Text>
              </Body>
            </ListItem>



            </Content>

    )};
}

function mapStateToProp(state) {
  return ({
    // jb class me data mangwana hota hy store se
    details: state.root. teacherInfo ,
    accounttype : state.root.accountType
  })
}
function mapDispatchToProp(dispatch) {
  return ({
     // jb class se data store me bhejna hota hai
    
  })
}

 export const TeacherHome = connect(
  mapStateToProp, 
  mapDispatchToProp
 ) (withNavigation (TeacherSideBar));