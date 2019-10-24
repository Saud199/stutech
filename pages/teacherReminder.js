import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail } from 'native-base';
import { withNavigation } from 'react-navigation';

class TeacherReminder extends Component {

    constructor() {
        super();

        this.state ={
          reminderArray : []
        }
    
    }

    displayReminders() {
        const {reminderArray} = this.state;
        reminderArray.push({name : 'Seminar on C++' , venue : 'Venue : SSUET' , date : 'Date : 25th Sep 19' , time : 'Time : 10:00 AM' , image : require('../images/c_plusplus.png')});
        reminderArray.push({name : 'Seminar on React' , venue : 'Venue : Axiom' , date : 'Date : 14th Oct 19' , time : 'Time : 01:00 PM' , image : require('../images/react.png')});
        reminderArray.push({name : 'Seminar on Android' , venue : 'Venue : UIT' , date : 'Date : 21st Nov 19' , time : 'Time : 09:00 AM' , image : require('../images/android.png')});
    }


  render() {
    const {reminderArray} = this.state;
    this.displayReminders();
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


        <Content padder style={{ padding: 7 }}>

        <Text style={{ alignSelf: 'center', fontSize: 20}}>REMINDERS</Text>

        { reminderArray.map((val , ind) => {
            return(

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{width: 40, height: 40}}  source={val.image} />
              </Left>
              <Body>
                <Text>{val.name}</Text>
                <Text note numberOfLines={1}>{val.venue}</Text>
                <Text note numberOfLines={2}>{val.date}</Text>
                <Text note numberOfLines={3}>{val.time}</Text>
                <Button block style={{backgroundColor:"#14c2e0", width: 100, height: 40 , marginTop:9}}>
                  <Text>Delete</Text>
                </Button>
              </Body>
              
            </ListItem>
          </List>

            )
            })
        }


        </Content>


      </Container>

    );
  }
  
}


export default withNavigation(TeacherReminder);