import React, {Component} from 'react';
import {Button, Container, Header, Content,Item,Label,Input,Text,Form,Body, Title, Left, Right} from 'native-base';


class TeacherSecurity extends Component {

    render(){
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
        
       <Form>

            <Text style={{ alignSelf: 'center', fontSize: 20}}>UPDATE PASSWORD</Text>

            <Item floatingLabel last>
            <Label >Enter Current Password</Label>
            <Input secureTextEntry={true} />
            </Item>

            <Item floatingLabel last>
            <Label>Enter New Password</Label>
            <Input secureTextEntry={true} />
            </Item>

            
            <Item floatingLabel last>
            <Label>RE-Enter New Password</Label>
            <Input secureTextEntry={true} />
            </Item>
            
            
        </Form>

        
        <Button  block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 30, marginBottom:20}}><Text> Update </Text></Button>

          </Content>
        
      </Container>
    );
    }
  }
  
  export default TeacherSecurity;