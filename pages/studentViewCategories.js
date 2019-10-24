import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Drawer, Root, Title, Item, Input, Tab, Tabs, ScrollableTab, Toast, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { withNavigation } from 'react-navigation'

class StudentViewCategories extends Component {

  constructor() {
    super();
    this.state ={
      categoriesArray : [],
    
      
    }

  }

  addCategories() {
    const {categoriesArray} = this.state;
    categoriesArray.push({name : 'SSUET' , image : require('../images/job.jpg')});
    categoriesArray.push({name : 'Oracle' , image : require('../images/oracle.png')});
    categoriesArray.push({name : 'Decima' , image : require('../images/decima.png')});
    categoriesArray.push({name : 'App Bakers' , image : require('../images/ssuet.png')});
  }


  render() {
    const {categoriesArray} = this.state;
    this.addCategories();
    return (

      <Container>
        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate('StudentNewsFeed')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>
          <Right>
            <Button transparent>
             <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/filter.png')} />
            </Button>
          </Right>
        </Header>
        

        

        <Tabs tabBarBackgroundColor="#14c2e0" renderTabBar={()=> <ScrollableTab />} >
          <Tab heading="Jobs" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
          <Content style={{backgroundColor:'#D3D3D3'}}>

          

          { categoriesArray.map((val , ind) => {
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

            

              <Image  source={val.image} style={{height: 200, resizeMode:'contain', width: null, flex: 1}}/>
             
              
            </CardItem>
            <CardItem style={{marginRight:15}}>
              <Left>
                <Button  block style={{backgroundColor: '#14c2e0' , width: 105}}><Text>Reminder</Text></Button>
              </Left>
              <Body>
                <Button block style={{backgroundColor: '#14c2e0' , width: 105}}><Text>Favourite</Text></Button>
              </Body>
              <Right>
                <Button block style={{backgroundColor: '#14c2e0', width: 105}}><Text>Profile</Text></Button>
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
      
      
    );
  }
  
}

export default withNavigation (StudentViewCategories);
