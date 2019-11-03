import React, {Component} from 'react';
import {Button, Container, Header, Content,Item,Label,Input,Text,Form,Body, Title, Left, Right, Icon} from 'native-base';
import firebase from '../config/firebase.js';
import { connect } from 'react-redux';

class Security extends Component {

  constructor() {
    super();
    this.state = {
      oldPass : '',
      newPass : '',
      reNewPass : ''
    }
  }

  updatePassword(){
    const {oldPass, newPass, reNewPass} = this.state;

    var data = this.props.details;

    if (oldPass.length == 0 || newPass.length == 0 || reNewPass.length == 0) {
      alert('Please fill out all the fields');
    }
    else if (oldPass.length < 6 || newPass.length < 6 || reNewPass.length < 6 ) {
      alert('Password must contain atleast 6 characters');
    }
    else if(oldPass==newPass){
      alert('Old and New Password are Same');
    }
    else if(newPass!=reNewPass){
      alert('Password doesnot match');
    }
    else {
      firebase.auth().signInWithEmailAndPassword( data.email , oldPass)
            .then(function(user) {
    
                firebase.auth().currentUser.updatePassword(newPass).then(function(){
                    firebase.database().ref("Users/"+data.id).update({pass:newPass});
                   
                    //this.setState({oldPass : '', newPass : '', reNewPass : ''});
                   
                    alert('Password Updated Successfully');
                
                }).catch(function(err){
                  alert(''+err);
                 });
        
            }).catch(function(err){
              alert(''+err);
            });
    }
  }

    render(){
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
         <Right/>
         </Header>
  
       <Content padder style={{ padding: 7 }}>
        
       <Form>

            <Text style={{ alignSelf: 'center', fontSize: 20}}>UPDATE PASSWORD</Text>

            <Item floatingLabel last>
            <Label >Enter Current Password</Label>
            <Input secureTextEntry={true} onChangeText={(txt) => this.setState({ oldPass : txt })} value={this.state.oldPass} />
            </Item>

            <Item floatingLabel last>
            <Label>Enter New Password</Label>
            <Input secureTextEntry={true} onChangeText={(txt) => this.setState({ newPass : txt })} value={this.state.newPass} />
            </Item>

            
            <Item floatingLabel last>
            <Label>Re-enter New Password</Label>
            <Input secureTextEntry={true} onChangeText={(txt) => this.setState({ reNewPass : txt })} value={this.state.reNewPass} />
            </Item>
            
            
        </Form>

        
        <Button  block onPress={() => this.updatePassword()} style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 30, marginBottom:20}}><Text> Update </Text></Button>

          </Content>
        
      </Container>
    );
    }
  }
  
  function mapStateToProp(state) {
    return ({
      details: state.root. studentInfo ,
      accounttype : state.root.accountType
    })
  }
  function mapDispatchToProp(dispatch) {
    return ({
        //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
    })
  }
  
export default connect(mapStateToProp, mapDispatchToProp)(Security);