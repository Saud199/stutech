import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';
import { Container, Content, Header,Icon,Left,Right,ListItem,List,Thumbnail,Body,Text,Button,Title } from 'native-base';
 

class ContactsList extends Component {

    constructor() {
        super();

        this.state ={
          contactsArray : []
        }
    
    }

    displayContacts() {
        const {contactsArray} = this.state;
        contactsArray.push({image : require('../images/profilepic1.jpg'), name : 'Mark Zukerberg', message: 'Hello nice to meet you'} );
        contactsArray.push({image : require('../images/profilepic2.jpg'), name : 'Bill Gates', message: 'Hello nice to meet you'} );
        contactsArray.push({image : require('../images/profilepic3.jpg'), name : 'Steve Jobs', message: 'Hello nice to meet you'} );
       
    }


  render() {
    const {contactsArray} = this.state;
    this.displayContacts();
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
                    <Right />
                    </Header>

                    <Content>

        { contactsArray.map((val , ind) => {
                return(
            
            <List>
                <ListItem avatar  onPress={()=> this.props.navigation.navigate('Messenger')}>
              <Left>
                <Thumbnail source={val.image} />
              </Left>
              <Body>
                <Text>{val.name}</Text>
                <Text note>{val.message}</Text>
              </Body>
              
            </ListItem>
          </List>
                )})}
                

            </Content>

        </Container>
   
    );
  }
  
}

export default ContactsList;