import { withNavigation } from 'react-navigation';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Content, Button, ListItem, Left, Right,Thumbnail,Body, Icon} from 'native-base';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';

class studentSideBar extends Component {

  constructor(props){
    super(props);
  }

  logOff() {
    firebase.auth().signOut().then(function() {
      this.props.navigation.navigate('Login');
    }).catch(function(error) {
      alert(''+error);
    });
  }

//  showDetails = () => {
//     this.props.navigation.navigate('StudentComplaints');
//   }

    render() {

        return(
    
            <Content style={{backgroundColor:'#ffffff'}}>

            <ListItem avatar onPress={()=> this.props.navigation.navigate('StudentProfile')}>

            <Left>
                <Thumbnail source={{uri : this.props.details.imgURL}} />
            </Left>
                
            <Body>
                <Text>{this.props.details.name}</Text>
            </Body>
            
            </ListItem>

            <Text>{"\n"}</Text>



            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('StudentViewCategories')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/categories1.png')} />
              </Left>
              <Body>
                <Text>Categories</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('StudentNotifications')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/notification.jpg')} />
              </Left>
              <Body>
                <Text>Notifications</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('StudentReminder')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/reminder.jpg')} />
              </Left>
              <Body>
                <Text>Reminder</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('StudentComplaints')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/complaint.jpg')} />
              </Left>
              <Body>
                <Text>Complaint</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('StudentViewOrganizations')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/organization.jpg')} />
              </Left>
              <Body>
                <Text>Organizations</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('StudentAchievements')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/achievements.jpg')} />
              </Left>
              <Body>
                <Text>My Achievements</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('StudentFavourites')}>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/favourite.jpg')} />
              </Left>
              <Body>
                <Text>Favorites</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('Security')}>
              <Left>
                <Thumbnail square style={{width: 25, height: 25}}  source={require('../images/settings.png')} />
              </Left>
              <Body>
                <Text>Settings</Text>
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
    details: state.root. studentInfo ,
    accounttype : state.root.accountType
  })
}
function mapDispatchToProp(dispatch) {
  return ({
     // jb class se data store me bhejna hota hai
    
  })
}

// export default {
//   withNavigation,
//   connect
// }

//export const  withNavigation;
//export  default connect(mapStateToProp, mapDispatchToProp )(studentSideBar);
//export default connect(mapStateToProp, mapDispatchToProp)(studentSideBar);
 export const Home = connect(
  mapStateToProp, 
  mapDispatchToProp
 ) (withNavigation (studentSideBar));