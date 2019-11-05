import React, {Component} from 'react';
import { Image } from 'react-native';
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
        organizationArray.push({name : 'SSUET' , web : 'www.ssuet.edu.pk' , add : 'Nipa, Gulshan' , orgType : 'Corporate' , image : require('../images/ssuet.png')});
        organizationArray.push({name : 'Oracle' , web : 'www.oracle.com' , add : 'Redwood City, California' , orgType : 'Database Company' , image : require('../images/oracle.png')});
        organizationArray.push({name : 'Decima AI' , web : 'www.decimaai.com' , add : 'DHA Phase-V, Karachi' , orgType : 'Software House' , image : require('../images/decima.png')});
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

        {/* <Text style={{ alignSelf: 'center', fontSize: 20}}>ORGANIZATIONS</Text> */}

        { organizationArray.map((val , ind) => {
            return(

          <List>
            <Image
            style={{width: 80, height: 80, alignSelf:'center', borderRadius:80/2}} 
            source={val.image} />

            <ListItem>
              {/* <Left>
                <Thumbnail square style={{width: 40, height: 40}}  source={val.image} />
              </Left> */}
              <Body>
                <Text style={{alignSelf:'center'}}>{val.name}</Text>
                <Text note numberOfLines={1} style={{alignSelf:'center'}}>{val.web}</Text>
                <Text note numberOfLines={2} style={{alignSelf:'center'}}>{val.add}</Text>
                <Text note numberOfLines={3} style={{alignSelf:'center'}}>{val.orgType}</Text>
                <Button block style={{backgroundColor:"#14c2e0", width: 150, height: 40 , marginTop:9, alignSelf:'center'}}>
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