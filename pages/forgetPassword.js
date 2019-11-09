import React, {Component} from 'react';
import { Image, ImageBackground } from 'react-native';
import {Button, Container, Header, Content,Item,Label,Input,Text,Form,Body, Title, Left,Icon, Right} from 'native-base';
import firebase from '../config/firebase.js';
import axios from 'axios';

class ForgetPassword extends Component {

    constructor() {
        super();
    
        this.state = {
          searchemail:true, //1
          verifysecurityanswer:false, //2

          userEmail : '',
          userQues : '',
          getAns : '',
          enterAns : '',
          userPass : ''
         
        }
    
    }

    getQuestion(){
        const { userEmail, userQues, getAns, enterAns } = this.state;
        //var  email = document.getElementById('secemail').value;
          if(userEmail.length<4){
            alert('Enter Correct Email Address');
          }else{
            firebase.database().ref("/Users").orderByChild("email").equalTo(""+userEmail.toLowerCase()).on("value", (snapshot)=> {
              if(snapshot.exists()){
              snapshot.forEach((childSnapshot)=> {
               var data = childSnapshot.val();
               //console.log(data)
               //document.getElementById('secques').innerHTML=data.secQuestion;
               this.setState({
                 userEmail : data.email ,
                 userQues : data.secQuestion ,
                 getAns : data.secAns ,
                 userPass : data.pass,
                 searchemail : false,
                 verifysecurityanswer : true
               })
              })
            }
              else{
                alert('The email is not found in database');
              }
            })
          }
    }


    getAnswer(){
        const { userEmail , userQues , userPass, getAns, enterAns} = this.state;
        var from = "admin@stutech.com"
        var to = ""+userEmail;
        var subject = "Forget Password Request!"
        var message = "Your Stutech Account Password is :"+userPass;
        var ans = enterAns
        if(getAns.toLowerCase()==enterAns.toLowerCase()){
          axios.post('https://stutech2019.herokuapp.com/send', {
            from , to , subject , message
          }).then((res) => {
            alert('Your Password has been sent to your email');
            this.props.navigation.navigate('Login');
          });
        }
        else{
          alert('Your Answer is incorrect');
        }
      
       }


    render(){

        const{emailsent,verifysecurityanswer,searchemail}=this.state
        return(

            <Container >

            <Header style={{backgroundColor:'#14c2e0'}}>
                    <Left>
                        <Button transparent onPress={()=> this.props.navigation.navigate('Login')}>
                        <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Stutech</Title>
                    </Body>
                    <Right />
                    </Header>

                    <ImageBackground source={require('../images/background.jpg')} imageStyle={{opacity:.2}} style={{width: '100%', height: '100%'}}>

            <Content padder style={{ padding: 7 }}>

    

                <Image
          
                  style={{width: 200, height: 180 , alignSelf:"center"}} 
                  source={require('../images/app_logo.png')} />



            <Text>{"\n"}</Text>
            
            {this.state.searchemail &&
            <Content>
            <Item floatingLabel last>
              <Label >Search by Email</Label>
              <Input onChangeText={(txt) => this.setState({ userEmail : txt })}  value={this.state.userEmail} />

             </Item>
             {/* onPress={()=>{this.setState({searchemail:false,verifysecurityanswer:true,emailsent:false})}} */}
            
             <Button block onPress={() => this.getQuestion()} style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}}  ><Text>Search</Text></Button>
        
             </Content>
            }

            

            {this.state.verifysecurityanswer &&
                <Content>
                
                <Text style={{alignSelf:"center"}}>{this.state.userQues}</Text>

                <Text>{"\n"}</Text>

                <Item floatingLabel last>
                <Label >Security Answer</Label>
                <Input onChangeText={(txt) => this.setState({ enterAns : txt })}  value={this.state.userAns}/>

                </Item>
                {/* onPress={()=>{this.setState({searchemail:false,verifysecurityanswer:false,emailsent:true})}} */}
                <Button block onPress={() => this.getAnswer()} style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}} ><Text>Submit</Text></Button>
                </Content>
                }


            </Content>

            </ImageBackground>

            
            </Container>


        )
    }




}

export default ForgetPassword;