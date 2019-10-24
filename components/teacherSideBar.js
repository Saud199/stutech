import { withNavigation } from 'react-navigation';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Content, Button, ListItem, Left, Right,Thumbnail,Body, Icon} from 'native-base';

class TeacherSideBar extends Component {

  constructor(props){
    super(props);
  }

//  showDetails = () => {
//     this.props.navigation.navigate('StudentComplaints');
//   }

    render() {

        return(
    
            <Content style={{backgroundColor:'#ffffff'}}>

            <ListItem avatar onPress={()=> this.props.navigation.navigate('TeacherProfile')}>

            <Left>
                <Thumbnail source={require('../images/profilepic2.jpg')} />
            </Left>
                
            <Body>
                <Text>Bill Gates</Text>
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
                <Text>My Achievements</Text>
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

            <ListItem thumbnail onPress={()=> this.props.navigation.navigate('Security')}>
              <Left>
                <Thumbnail square style={{width: 25, height: 25}}  source={require('../images/security.png')} />
              </Left>
              <Body>
                <Text>Security</Text>
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

export default withNavigation(TeacherSideBar);