import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';
import { Container, Content, Header,Icon,Left,Right,ListItem,List,Input,Thumbnail,Subtitle,Body,Text,Button,Title, Footer, Item, FooterTab } from 'native-base';
 

class Messenger extends Component {

    constructor() {
        super();

        this.state ={
          contactsArray : []
        }
    
    }

    displayContacts() {
        const {contactsArray} = this.state;
        contactsArray.push({image : require('../images/profilepic1.jpg'), name : 'Zukerberg', message: 'hello nice to meet you'} );
        contactsArray.push({image : require('../images/profilepic1.jpg'), name : 'Zubair', message: 'hello nice to meet you'} );
        contactsArray.push({image : require('../images/profilepic1.jpg'), name : 'Ahad', message: 'hello nice to meet you'} );
       
    }


  render() {
    const {contactsArray} = this.state;
    this.displayContacts();
    return (
        <Container>

            <Header style={{backgroundColor:'#14c2e0'}}>
                    <Left style={{flexDirection:'row'}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate('ContactsList')}>
                        <Icon name='arrow-back' />
                        </Button>
                        <Thumbnail source={require('../images/profilepic1.jpg')} style={{width : 45 , height : 45}} />
                    </Left>
                    <Body style={{marginLeft: 5}}>
                        <Title>Mark Zukerburg</Title>
                        <Subtitle>Online</Subtitle>
                    </Body>
            </Header>

            <Content padder style={{padding:7}}>

              <Text style={{backgroundColor: '#90ee90', alignSelf:'flex-start',width:180 , borderColor:'#000000', borderWidth:1, padding:2}}>Hello</Text>
              <Text>{"\n"}</Text>
              <Text style={{backgroundColor: '#87cefa', alignSelf:'flex-end' , width:180 , borderColor:'#000000', borderWidth:1, padding:2}}>Hi</Text>
              
        {/* { contactsArray.map((val , ind) => {
                return(
            
            <List>
                <ListItem avatar>
              <Left>
                <Thumbnail source={val.image} />
              </Left>
              <Body>
                <Text>{val.name}</Text>
                <Text note>{val.message}</Text>
              </Body>
              
            </ListItem>
          </List>
                )})} */}
                

           



            </Content>

            <Footer>

              <FooterTab style={{backgroundColor:'#ffffff'}}>

                <Item regular style={{flex:0.75}}>
                  <Input placeholder='Type a message' />
                </Item>
                <Button block style={{ backgroundColor: '#14c2e0', flex: 0.25}}><Text style={{color:'#ffffff'}}>Send</Text></Button>
              </FooterTab>
    
            </Footer>

        </Container>
   
    );
  }
  
}

export default Messenger;