import React, {Component} from 'react';
import { Image, ImageBackground  } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Button, Container, Header, Content,Item,Label,Input,Text,Form,Body, Picker, Title,Icon, Left, Right, DatePicker} from 'native-base';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';

class Signup2 extends Component {

  constructor() {
    super();

    this.state = {
      teacherfields:false,
      studentfields:true,
      type:'Student',
      stdDate : '',
      teachDate : '',
      photo:null,
      rollNumber : '',
      section : '' ,
      stdDepartment : '',
      batch : '',
      employeeID : '',
      designation : '',
      teachDepartment : '',
      image : ''
    }

  }

  // componentDidMount(){
  //   var data = this.props.details;
  //   alert(''+data.firstName);
  // }

  showDetails(){
    firebase.database().ref("/chudai").on("value", (snapshot)=> {
      snapshot.forEach(c => {
        alert(c.val().name)
      })
    })
  
  }

 createAccount = async () => {
    const {type,photo,rollNumber,section,stdDate,stdDepartment,batch,employeeID,designation,teachDepartment,teachDate}=this.state;
    if (type == 'Student') {
      if(image == null) {
        alert('Please upload your photo');
      }
      // else if (rollNumber.length<11 || rollNumber.length>11) {
      //   alert('Please ! Must write Your Roll no in this format (20XX-XX-000)')
      // }
      // else if(section.length<1  || section.length>1 ){
      //   alert('Please Write Your Section Correctly. It can only Contain 1 Character')
      // }
      // else if(batch.length<4 || batch.length>4){
      //   alert('Please Write Your Batch Correctly')
      // }
      // else if(stdDate.length<10 || stdDate.length>10){
      //   alert('Please ! Must Write Your DOB in This Format (DD-MM-YYYY) ')
      // }
      else {
        //var blob = new Blob([photo.uri], { type: "image/jpeg" });
        var data = this.props.details;

        var name = data.firstName + ' ' + data.lastName;
        var email = data.email.toLowerCase();;
        var ph_no = data.phoneNo;
        var pass = data.pass;
        var gender = data.gender.toLowerCase();
        var secQues = data.securityQues;
        var secAns = data.securityAns;

        const response = await fetch(this.state.image);
          const blob = await response.blob();

        firebase.auth().createUserWithEmailAndPassword(email, pass).then((success)=>{


          
      
          var ref = firebase.storage().ref('storage').child((new Date()).getTime()+'ohyeah')
        
           ref.put(blob).then((snapshot)=>{
            return snapshot.ref.getDownloadURL();
            }).then(downloadURL => {
              alert(''+downloadURL)
            })

    


          // // varible to create refrence of firebase storage
          // var storageref = firebase.storage().ref("storage");
          // // function for uploading file in firebase database
          // var uploadtask= storageref.child(''+(new Date()).getTime()+photo.name).put(photo).then((snapshot)=>{
          // // returns the download url to download image from storage
          // return snapshot.ref.getDownloadURL();
          // }).then(downloadURL => {
          // // pushing data  and image url object into firebase database
          //   var database = firebase.database().ref();
          
          //   var skey =firebase.database().ref('Users/').push();
          
          //   var studentObj = {
          //     id : skey.key,
          //     name : name ,
          //     email : email,
          //     ph_no : ph_no ,
          //     pass : pass ,
          //     gender : gender ,
          //     rollNo : rollNumber ,
          //     section : section , 
          //     DOB : stdDate ,
          //     accountType : "Student" ,
          //     imgURL : photo,
          //     department : stdDepartment ,
          //     batch : batch,
          //     securityQuestion : secQues,
          //     securityAnswer : secAns,
          //   }
      
          //   skey.set(studentObj); 
            


          //   //  document.getElementById('rollno').value=""
          //   //  document.getElementById('section').value=""
          //   //  document.getElementById('SDOB').value=""

          //   alert('Congratulations Your Account has been Created Successfully')
            
          // }).catch((error)=> {
          //     alert(''+error.message)
          //  });
         }).catch((error)=> {
              alert(''+error.message)
      });

      }
    }
    
  }

  // var skey =  firebase.database().ref('/chudai').push();
    
  // var obj = {
  //   id : skey.key ,
  //   name :  this.props.details.fname ,
  //  num : this.props.details.number
  // }
 
  // skey.set(obj)  
  // alert('ghus gaya')
  // }

  handleChoosePhoto = async () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        // this.uploadImage(response.uri, "test-image")
        this.setState({ image : response.uri })
      }
    })
  }

  uploadImage = async (uri, imageName) => {
    
  }

  accountType(val){
    if(val=='Student'){
      this.setState({studentfields:true , teacherfields:false , type:val})
    }
    else{
    
      this.setState({studentfields:false , teacherfields:true , type:val})
    }
  }

  selectTeacherDepartment(value) {
    if (value == 'Computer Engineering') {
      this.setState({teachDepartment:value})
    } 
    else if (value == 'Software Engineering') {
      this.setState({teachDepartment:value})
    }
    else if (value == 'Computer Science') {
      this.setState({teachDepartment:value})
    }
    else {
      this.setState({teachDepartment:value})
    }
  }

  selectStudentDepartment(value) {
    if (value == 'Computer Engineering') {
      this.setState({stdDepartment:value})
    } 
    else if (value == 'Software Engineering') {
      this.setState({stdDepartment:value})
    }
    else if (value == 'Computer Science') {
      this.setState({stdDepartment:value})
    }
    else {
      this.setState({stdDepartment:value})
    }
  }



  
  render() {
    const{studentfields,teacherfields,photo}=this.state
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
            style={{width: 200, height: 180, alignSelf:'center'}} 
            source={require('../images/app_logo.png')}  />
  
          <Text>{"\n"}</Text>
  
           <Text style={{alignSelf:'center'}}>Hi {this.props.details.firstName}, Welcome to Stutech !</Text>
  
          <Text>{"\n"}</Text>
  
          <Text style={{alignSelf:'center'}}>Account Type</Text>
          <Item Picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined, alignSelf:'center' }}
                selectedValue={this.state.type}
                placeholder="Complaint As"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.type}
                onValueChange={(itemValue, itemIndex) =>
              
                  this.accountType(itemValue)
    
                }
              >
                <Picker.Item label="Student" value="Student" />
                <Picker.Item label="Teacher" value="Teacher" />
                
              </Picker>
            </Item>
          
         
          
        
          {studentfields && 
  
                      
           <Form>

            <Item floatingLabel last>
                  <Label >Roll Number</Label>
                  <Input onChangeText={(txt) => this.setState({ rollNumber : txt })}/>

            </Item>


            <Item floatingLabel last>
                  <Label >Section</Label>
                  <Input onChangeText={(txt) => this.setState({ section : txt })} />
                
            </Item>

            <Item floatingLabel last>
                  <Label >Batch</Label>
                  <Input onChangeText={(txt) => this.setState({ batch : txt })} />

            </Item>

            <Item floatingLabel last>
                  <Label >Date of Birth</Label>
                  <Input onChangeText={(txt) => this.setState({ stdDate : txt })}/>

            </Item>


            <Text>{"\n"}</Text>
             <Label style={{alignSelf:'center'}}>Department</Label>
             <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your Department"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.stdDepartment}
                onValueChange={this.selectStudentDepartment.bind(this)}
          
              >
                <Picker.Item label="Computer Engineering" value="Computer Engineering" />
                <Picker.Item label="Software Engineering" value="Software Engineering" />
                <Picker.Item label="Computer Science" value="Computer Science" />
                <Picker.Item label="Information Technology" value="Information Technology" />
              </Picker>
            </Item>

            </Form>
            
          }




          {teacherfields &&  
             <Form>

             <Item floatingLabel last>
                   <Label >Employee ID</Label>
                   <Input onChangeText={(txt) => this.setState({ employeeID : txt })} />
 
             </Item>
 
 
             <Item floatingLabel last>
                   <Label >Designation</Label>
                   <Input onChangeText={(txt) => this.setState({ designation : txt })} />
                 
             </Item>

             <Item floatingLabel last>
                  <Label >Date of Birth</Label>
                  <Input onChangeText={(txt) => this.setState({ teachDate : txt })}/>

            </Item>
 
 
             <Text>{"\n"}</Text>
             <Label style={{alignSelf:'center'}}>Department</Label>
             <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your Department"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.teachDepartment}
                onValueChange={this.selectTeacherDepartment.bind(this)}
          
              >
                <Picker.Item label="Computer Engineering" value="Computer Engineering" />
                <Picker.Item label="Software Engineering" value="Software Engineering" />
                <Picker.Item label="Computer Science" value="Computer Science" />
                <Picker.Item label="Information Technology" value="Information Technology" />
              </Picker>
            </Item>
 
             </Form>
             
          }
  
           

              {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 100, height: 100, alignSelf:'center' }}
          />
           )}
            <Text>{"\n"}</Text>
          <Button transparent onPress={this.handleChoosePhoto} block style={{ alignSelf:'center', marginTop: 10, marginBottom:20,color:'#000000'}}><Text>Choose Photo</Text></Button>
            
         
          
      <Button onPress={this.createAccount} block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text>Create Account</Text></Button>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
         
  
                </Content>
        </ImageBackground>
         </Container>
    );
  }
  
}
function mapStateToProp(state) {
  return ({
    details: state.root. signupInfo
  })
}
function mapDispatchToProp(dispatch) {
  return ({
      //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
  })
}


export default connect(mapStateToProp, mapDispatchToProp)(Signup2);

