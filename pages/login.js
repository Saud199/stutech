import React, {Component} from 'react';
import { Image} from 'react-native';
import {Button, Container, Header, Content,Item,Label,Input,Text,Form,Body, Title, Left, Right} from 'native-base';

class Login extends Component {

  render(){
  return (
    <Container>

     <Header style={{backgroundColor:'#14c2e0'}}>

      <Left/>
       <Body>
        <Title>Stutech</Title>
       </Body>
       <Right/>
       </Header>

     <Content padder style={{ padding: 7 }}>

        <Image
          
          style={{width: 200, height: 180 , alignSelf:"center"}} 
          source={require('../images/app_logo.png')} />

        <Text>{"\n"}</Text>

        <Form>

        <Item floatingLabel last>
              <Label >Enter Email</Label>
              <Input keyboardType="email-address" />


            </Item>

            <Item floatingLabel last>
              <Label >Enter Password</Label>
              <Input secureTextEntry={true} />
            </Item>


        </Form>
            


        <Button  onPress={() => this.props.navigation.navigate('StudentNewsFeed')} block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}}><Text>Login</Text></Button>

        <Text>{"\n"}</Text>

        <Text style={{alignSelf:"center"}}>{"Don't have an account yet ?"}<Text style={{color:'#14c2e0'}} onPress={() => this.props.navigation.navigate('Signup1')} > Click Here</Text> </Text>

        <Text>{"\n"}</Text>

        </Content>
      
    </Container>
  );
  }
}

export default Login;

