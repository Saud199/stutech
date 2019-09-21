import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail } from 'native-base';
import { withNavigation } from 'react-navigation';

class StudentViewOrganizations extends Component {

    constructor() {
        super();

        this.state ={
          organizationArray : []
        }
    
    }

    displayOrganizations() {
        const {organizationArray} = this.state;
        organizationArray.push({name : 'SSUET' , web : 'Website : www.ssuet.edu.pk' , add : 'Address : Nipa, Gulshan' , orgType : 'Type : Corporate' , image : require('../images/ssuet.png')});
        organizationArray.push({name : 'Oracle' , web : 'Website : www.oracle.com' , add : 'Address : Redwood City, California' , orgType : 'Type : Database Company' , image : require('../images/oracle.png')});
        organizationArray.push({name : 'Decima AI' , web : 'Website : www.decimaai.com' , add : 'Address : DHA Phase-V, Karachi' , orgType : 'Type : Software House' , image : require('../images/decima.png')});
    }


  render() {
    const {organizationArray} = this.state;
    this.displayOrganizations();
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


        <Content padder style={{ padding: 7 }}>

        <Text style={{ alignSelf: 'center', fontSize: 20}}>ORGANIZATIONS</Text>

        { organizationArray.map((val , ind) => {
            return(

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square style={{width: 40, height: 40}}  source={val.image} />
              </Left>
              <Body>
                <Text>{val.name}</Text>
                <Text note numberOfLines={1}>{val.web}</Text>
                <Text note numberOfLines={2}>{val.add}</Text>
                <Text note numberOfLines={3}>{val.orgType}</Text>
                <Button block style={{backgroundColor:"#14c2e0", width: 100, height: 40 , marginTop:9}}>
                  <Text>Details</Text>
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


export default withNavigation(StudentViewOrganizations);