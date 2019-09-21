import { withNavigation } from 'react-navigation';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Content, Button, ListItem, Left, Right,Thumbnail,Body, Icon} from 'native-base';

class studentSideBar extends Component {

  constructor(props){
    super(props);
  }

//  showDetails = () => {
//     this.props.navigation.navigate('StudentComplaints');
//   }

    render() {

        return(
    
            <Content style={{backgroundColor:'#ffffff'}}>

            <ListItem avatar onPress={()=> this.props.navigation.navigate('StudentProfile')}>

            <Left>
                <Thumbnail source={require('../images/profilepic1.jpg')} />
            </Left>
                
            <Body>
                <Text>Abdul Ahad</Text>
            </Body>
            
            </ListItem>

            <Text>{"\n"}</Text>



            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{width: 30, height: 30}}  source={require('../images/newsfeed.jpg')} />
              </Left>
              <Body>
                <Text>News Feed</Text>
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
                <Text>Favourites</Text>
              </Body>
            </ListItem>

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('Login')}>
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

export default withNavigation(studentSideBar);