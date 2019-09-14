import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Drawer, Title, Item, Input, Tab, Tabs, ScrollableTab, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import SideBar from '../components/studentSideBar.js';
import { validate } from '@babel/types';

class StudentNewsFeed extends Component {

  constructor() {
    super();
    this.state ={
      newsFeedArray : []
    }

  }

  addData() {
    const {newsFeedArray} = this.state;
    newsFeedArray.push({name : 'SSUET' , image : require('../images/ssuet.png')});
    newsFeedArray.push({name : 'Oracle' , image : require('../images/oracle.png')});
    newsFeedArray.push({name : 'Decima' , image : require('../images/decima.png')});
    newsFeedArray.push({name : 'App Bakers' , image : require('../images/ssuet.png')});
  }

  closeDrawer () {
    this._drawer._root.close()
  };
  openDrawer () { 
    this._drawer._root.open() 
  };

  render() {
    const {newsFeedArray} = this.state;
    this.addData();
    return (
      <Drawer 
        ref={(ref) => { this._drawer = ref; }} 
        content={<SideBar navigator={this._navigator} />} 
        onClose={() => this.closeDrawer()} >

          
      <Container>
        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={() => this.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>
          <Right>
          <Thumbnail square onPress={() => alert('Filter Button')} style={{width: 30, height: 30}}  source={require('../images/filter.jpg')} />
          </Right>
        </Header>
        

        

        <Tabs renderTabBar={()=> <ScrollableTab />} >
          <Tab heading="Jobs" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
          <Content>
          { newsFeedArray.map((val , ind) => {
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
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          
          

           )
          })
          }
          </Content>
          </Tab>
          <Tab heading="Internships" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
            <Text>Tab 2</Text>
          </Tab>
          <Tab heading="Seminars" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
            <Text>Tab 3</Text>
          </Tab>
          <Tab heading="Scholarships" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
            <Text>Tab 4</Text>
          </Tab>
          <Tab heading="Other" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
            <Text>Tab 5</Text>
          </Tab>
        </Tabs>

          
        

        
      </Container>


      </Drawer>
      
      
    );
  }
  
}

export default StudentNewsFeed;
