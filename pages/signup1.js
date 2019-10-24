import React, {Component} from 'react';
import { Image } from 'react-native';
import {Button, Container, Header, Content,Item,Label,Input,Text,Form,Body, Title, Left, Right, Icon} from 'native-base';

class Signup1 extends Component {

  render() {
    return (

      <Container>

      

      <Header style={{backgroundColor:'#14c2e0'}}>
 
       <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate('Login')}>
              <Icon name='arrow-back' />
            </Button>
       </Left>
        <Body>
         <Title>Stutech</Title>
        </Body>
        <Right/>
        </Header>

       <Content padder style={{ padding: 7 }}>

        <Image
          style={{width: 200, height: 180, alignSelf:"center"}} 
          source={require('../images/app_logo.png')}  />

        <Text>{"\n"}</Text>

         <Text style={{alignSelf:"center"}}>Want to signup as an organization ?<Text style={{color:'#14c2e0'}} onPress={() => this.props.navigation.navigate('OrganizationSignUp')} > Click Here</Text> </Text>

         <Form>

        <Item floatingLabel last>
              <Label >First Name</Label>
              <Input />

        </Item>

        
        <Item floatingLabel last>
              <Label >Last Name</Label>
              <Input  />
            
        </Item>


       <Item floatingLabel last>
              <Label >Enter Email</Label>
              <Input keyboardType="email-address" />

       </Item>

       <Item floatingLabel last>
              <Label >Enter Password</Label>
              <Input secureTextEntry={true} />
        </Item>


        <Item floatingLabel last>
              <Label >Add Security Question</Label>
              <Input />

        </Item>

        <Item floatingLabel last>
              <Label >Add Security Answer</Label>
              <Input />

        </Item>

        <Item floatingLabel last>
              <Label >Enter Contact Number</Label>
              <Input keyboardType="name-phone-pad" />
      
        </Item>

        <Item floatingLabel last>
              <Label >Enter Address</Label>
              <Input  />


         </Item>
            


        </Form>
      

        <Text>{"\n"}</Text>

        <Button  onPress={() => this.props.navigation.navigate('Signup2')} block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text> Next </Text></Button>

              </Content>

      </Container>
  );
}

}

export default Signup1;
