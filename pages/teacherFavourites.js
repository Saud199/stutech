import React, {Component} from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';

class TeacherFavourites extends Component {

    constructor() {
        super();

        this.state ={
          favouritesArray : []
        }
    
    }

    displayFavourites() {
        const {favouritesArray} = this.state;
        favouritesArray.push({name : 'SSUET' , image : require('../images/ssuet.png')});
        favouritesArray.push({name : 'Oracle' , image : require('../images/oracle.png')});
        favouritesArray.push({name : 'Decima' , image : require('../images/decima.png')});
        favouritesArray.push({name : 'App Bakers' , image : require('../images/ssuet.png')});
    }


  render() {
    const {favouritesArray} = this.state;
    this.displayFavourites();
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


        <Content>

        <Text style={{ alignSelf: 'center', fontSize: 20}}>FAVOURITES</Text>

        { favouritesArray.map((val , ind) => {
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
                      <Button block style={{backgroundColor: '#14c2e0' , width : 120}}><Text>Reminder</Text></Button>
                    </Left>
                    <Right>
                      <Button block style={{backgroundColor: '#14c2e0' , width : 120}}><Text>Profile</Text></Button>
                    </Right>
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


export default withNavigation(TeacherFavourites);