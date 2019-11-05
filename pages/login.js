import React, {Component} from 'react';
import { Image, ImageBackground, View } from 'react-native';
import {Button, Container, Header, Content,Item,Label,Input,Text,Form,Body, Title, Left, Right, Thumbnail} from 'native-base';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';
import {StudentDetail} from '../store/action/action.js';
import {TeacherDetail} from '../store/action/action.js';
import ImagePicker from 'react-native-image-picker';

class Login extends Component {

  constructor() {
    super();
    this.state={
      uemail : '',
      upass : '',
      hidePassword : true ,
      image : ''
    }
    this.getDetail = this.getDetail.bind(this);
  }

  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  checkLogin() {
    const {uemail,upass} = this.state;

    if (uemail.length < 4) {
      alert('Please Enter Valid Email Address ');
    }
    else if (upass.length < 6) {
      alert('Password Should Contain 6 or more Character');
    }
    else {
      // verification of user input on firebase database
      firebase.auth().signInWithEmailAndPassword(uemail,upass) 
          .then((userResponse)=> {
             this.getDetail();
          }) 
          // catch error if any error occur in firebase verification
          .catch((error)=> {
            alert(''+error.message)
          });
    }

  }

  getDetail() {
    const {uemail} = this.state;

    firebase.database().ref("/Users").orderByChild("email").equalTo(""+uemail.toLowerCase()).on("value", (snapshot)=> {
      snapshot.forEach((childSnapshot)=> {
        
        var accType = childSnapshot.val().accountType;
        var data = childSnapshot.val();

        if(accType=='Student'){

           var stuObj = {
            name : data.name ,
            DOB : data.DOB ,
            department : data.department ,
            accountType : data.accountType ,
            email : data.email ,
            gender : data.gender ,
            id : data.id ,
            imgURL : data.imgURL ,
            number : data.ph_no ,
            rollNo : data.rollNo ,
            section : data.section ,
            batch : data.batch  
        }


           this.props.studentInfo(stuObj);
          
             var obj = {
               name : data.name ,
               email : data.email ,
               ph_no : data.ph_no ,
               gender : data.gender ,
               image : data.imgURL ,
               batch : data.batch ,
               department : data.department , 
             }
            firebase.database().ref(`Student/${data.rollNo}/StudentInfo`).update(obj);
            this.setState({uemail:'' , upass:''})
            this.props.navigation.navigate('StudentNewsFeed');


        }
        else if(accType=='Teacher'){

          var techObj = {
            name : data.name ,
            DOB : data.DOB ,
            department : data.department ,
            designation : data.designation ,
            accountType : data.accountType ,
            email : data.email ,
            empID : data.empID ,
            gender : data.gender ,
            id : data.id ,
            imgURL : data.imgURL ,
            number : data.ph_no ,
          }

          this.props.teacherInfo(techObj);
          this.props.navigation.navigate('TeacherNewsFeed');
          
        }
          

      })
    })

  }

  handleChoosePhoto () { 
    const {image} = this.state;
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
         this.setState({image:response.uri})
 
        } 
      })
    }
        

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

       <ImageBackground source={require('../images/background.jpg')} imageStyle={{opacity:.2}} style={{width: '100%', height: '100%'}}>

     <Content padder style={{ padding: 7 }}>

        <Image
          
          style={{width: 200, height: 180 , alignSelf:"center"}} 
          source={require('../images/app_logo.png')} />

        <Text>{"\n"}</Text>

        <Form>

        <Item regular>
              {/* <Label >Enter Email</Label> */}
              <Input keyboardType="email-address" placeholder="Enter Email" onChangeText={(txt) => this.setState({ uemail : txt })}  value={this.state.uemail} />


            </Item>

            <Item regular style={{flex:0.75, marginTop:20}}>
            
                <Input secureTextEntry={this.state.hidePassword} placeholder="Enter Password" onChangeText={(txt) => this.setState({ upass : txt })}  value={this.state.upass}/>
              
                <Button transparent style={{width: 22, height: 22, flex: 0.25}} onPress={this.setPasswordVisibility}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/show_pass.png')} />
                </Button>
              
            </Item>


        </Form>
      
        <Button  onPress={() => this.checkLogin()} block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}}><Text>Login</Text></Button>
      
       <Text>{"\n"}</Text>

        
        <Text style={{color:'#14c2e0', alignSelf:"center"}}  onPress={() => this.props.navigation.navigate('ForgetPassword')}>Forget Password ?</Text> 

        <Text style={{alignSelf:"center"}}>{"Don't have an account yet ?"}<Text style={{color:'#14c2e0'}} onPress={() => this.props.navigation.navigate('Signup1')} > Click Here</Text> </Text>

        <Button  onPress={() => this.props.navigation.navigate('TeacherNewsFeed')} block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}}><Text>Teacher Login</Text></Button>

        </Content>
        </ImageBackground>
    </Container>
  );
  }
}

function mapStateToProp(state) {
  return ({
    // jb class me data mangwana hota hy store se
  })
}
function mapDispatchToProp(dispatch) {
  return ({
     // jb class se data store me bhejna hota hai
     studentInfo : (info)=>{ dispatch(StudentDetail(info))} ,
     teacherInfo : (info2)=>{ dispatch(TeacherDetail(info2))} ,
  })
}


export default connect(mapStateToProp, mapDispatchToProp)(Login);

