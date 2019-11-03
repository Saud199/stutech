import React, {Component} from 'react';
import { Image, ImageBackground } from 'react-native';
import {Button, Container, Header, Content,Item,Label,Input,Text,Form,Body, Title, Left, Right} from 'native-base';
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
    }
    this.getDetail = this.getDetail.bind(this);
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

  // handleChoosePhoto= async () => {
  //   //   let result = await ImagePicker.launchCameraAsync();
  //     let result = await ImagePicker.launchImageLibraryAsync();
  //     ImagePicker.launchImageLibrary(options, response => {
  //       if (response.uri) {
  //         this.uploadImage(response.uri, "test-image")
  //         .then(() => {
  //                 alert("Success");
  //               })
  //               .catch((error) => {
  //                 alert(error);
  //               });
  //         // this.setState({ photo: response.uri });
  //       }
  
  //     // if (!result.cancelled) {
  //     //   this.uploadImage(result.uri, "test-image")
  //     //     .then(() => {
  //     //       Alert.alert("Success");
  //     //     })
  //     //     .catch((error) => {
  //     //       Alert.alert(error);
  //     //     });
  //     // }
  //   })
  // }

  handleChoosePhoto = async () => { // ye
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.uploadImage(response.uri, "test-image")
        .then((res) => {
              alert("Success"+res);
              console.debug('sasas' , res)
              })
              .catch((error) => {
                alert(error);
              });
          //       Alert.alert("Success");
          //     })
          //     .catch((error) => {
          //       Alert.alert(error);
          //     }); await ImagePicker.launchCameraAsync();
    // let result = await ImagePicker.launchImageLibraryAsync();

    // if (!result.cancelled) {
    //   this.uploadImage(result.uri, "test-image")
    //     .then(() => {
    //       Alert.alert("Success");
    //     })
    //     .catch((error) => {
    //       Alert.alert(error);
    //     });
    // })
  // })
   }
  })
}
    uploadImage = async (uri, imageName) => { //ye wala
      const response = await fetch(uri);
      const blob = await response.blob();
  
      var ref = firebase.storage().ref().child("images/" + imageName);
      return ref.put(blob);
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

        <Item floatingLabel last>
              <Label >Enter Email</Label>
              <Input keyboardType="email-address" onChangeText={(txt) => this.setState({ uemail : txt })}  value={this.state.uemail} />


            </Item>

            <Item floatingLabel last>
              <Label >Enter Password</Label>
              <Input secureTextEntry={true} onChangeText={(txt) => this.setState({ upass : txt })}  value={this.state.upass}/>
            </Item>


        </Form>

        <Button transparent onPress={this.handleChoosePhoto} block style={{ alignSelf:'center', marginTop: 10, marginBottom:20,color:'#000000'}}><Text>Choose Photo</Text></Button>
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

