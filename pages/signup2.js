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
      // image: '',
      rollNumber : '',
      section : '' ,
      stdDepartment : 'Computer Engineering',
      batch : '',
      employeeID : '',
      designation : '',
      teachDepartment : 'Computer Engineering',
      image : '',
      enrollNo : '',
      qual : ''
    }

  }

  // showDetails(){
  //   firebase.database().ref("/Users").on("value", (snapshot)=> {
  //     snapshot.forEach(c => {
  //       alert(c.val().name)
  //     })
  //   })
  
  // }

 async createAccount() {
    const {type,image,rollNumber,section,stdDate,stdDepartment,batch,employeeID,designation,teachDepartment,teachDate, enrollNo, qual}=this.state;
    
        const response = await fetch(image);
        const blob = await response.blob();
    
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
      // else if(enrollNo.length<6){
      //   alert('Please Write Enrollment Number Correctly')
      //  }
      else {
        var data = this.props.details;

        var name = data.firstName + ' ' + data.lastName;
        var email = data.email.toLowerCase();
        var ph_no = data.phoneNo;
        var pass = data.pass;
        var gender = data.gender.toLowerCase();
        var secQues = data.securityQues;
        var secAns = data.securityAns;

          

          firebase.database().ref("/Users").orderByChild("rollNo").equalTo(""+rollNumber).on("value", (snapshot)=> {
            
            if(snapshot.exists()){
              alert('Account Already Exist with this Roll No');
            }

            else {
              var metadata = {
                contentType: 'image/jpeg',
              };

              firebase.auth().createUserWithEmailAndPassword(email, pass).then((success)=>{
                firebase.storage().ref('storage').child(''+(new Date()).getTime()).put(blob, metadata).then((res)=>{
                  return res.ref.getDownloadURL();
                }).then(downloadURL=>{
                
               
                  var skey =firebase.database().ref("/Users").push();
                
                  var studentObj = {
                    id : skey.key,
                    name : name ,
                    email : email,
                    ph_no : ph_no ,
                    pass : pass ,
                    gender : gender ,
                    rollNo : rollNumber ,
                    section : section , 
                    DOB : stdDate ,
                    accountType : "Student" ,
                    department : stdDepartment ,
                    batch : batch,
                    secQuestion : secQues,
                    secAns : secAns,
                    imgURL : downloadURL,
                    accountStatus : 'Not Approved' ,
                    enrollNo : enrollNo ,
                  }
            
                  skey.set(studentObj); 
                
      
                  alert('Congratulations Your Account has been Created Successfully')
                  
                }).catch((error)=> { 
                  alert(''+error.message)
                 });

                }).catch((error)=> {
                  alert(''+error.message)
                });

            }
          
            
            })

          
         

      
    }
    
  }


  else if((type == 'Teacher')) {
    if(image == null) {
      alert('Please upload your photo');
    }
    else if(employeeID.length<6 || employeeID.length>6){
      alert('Employe ID Contain should only Contain 6 Characters')
    }
    else if(designation.length<3 ){
      alert('Please Write Your Designation Correctly')
    }
    else if(teachDate.length<10 || teachDate.length>10){
      alert('Please ! Must  Write Your DOB in This Format (DD-MM-YYYY)')
    }
    else if(teachDepartment.length<1){
      alert('Please select your department')
    }
    else if(qual.length<1){
      alert('Please type qualification correctly')
    }
    else {
      var data = this.props.details;

      var name = data.firstName + ' ' + data.lastName;
      var email = data.email.toLowerCase();
      var ph_no = data.phoneNo;
      var pass = data.pass;
      var gender = data.gender.toLowerCase();
      var secQues = data.securityQues;
      var secAns = data.securityAns;

        

        firebase.database().ref("/Users").orderByChild("empID").equalTo(""+employeeID).on("value", (snapshot)=> {
          
          if(snapshot.exists()){
            alert('Account Already Exist with this Employee ID');
          }

          else {
            var metadata = {
              contentType: 'image/jpeg',
            };

            firebase.auth().createUserWithEmailAndPassword(email, pass).then((success)=>{
              firebase.storage().ref('storage').child(''+(new Date()).getTime()).put(blob, metadata).then((res)=>{
                return res.ref.getDownloadURL();
              }).then(downloadURL=>{
              
             
                var skey =firebase.database().ref("/Users").push();
              
                var teacherObj = {
                  id : skey.key,
                  name : name ,
                  email : email,
                  ph_no : ph_no ,
                  pass : pass ,
                  gender : gender ,
                  empID : employeeID ,
                  designation : designation , 
                  DOB : teachDate ,
                  accountType : "Teacher" ,
                  imgURL : downloadURL,
                  department : teachDepartment ,
                  secQuestion : secQues ,
                  accountStatus : 'Not Approved' ,
                  secAns : secAns ,
                  qualification : qual,
                }
          
                skey.set(teacherObj); 
              
    
                alert('Congratulations Your Account has been Created Successfully')
                
              }).catch((error)=> { 
                alert(''+error.message)
               });

              }).catch((error)=> {
                alert(''+error.message)
              });

          }
        
          
          })

        
       

    
  }
  }

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
                placeholder="Account Type"
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
                  <Label >Enrollment Number</Label>
                  <Input onChangeText={(txt) => this.setState({ enrollNo : txt })}/>

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
                  <Label >Qualification</Label>
                  <Input onChangeText={(txt) => this.setState({ qual : txt })}/>

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
  
           

              {/* {photo && (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 100, height: 100, alignSelf:'center' }}
          />
           )} */}
            <Text>{"\n"}</Text>
            <Button transparent onPress={() => this.handleChoosePhoto()} block style={{ alignSelf:'center', marginTop: 10, marginBottom:20,color:'#000000'}}><Text>Choose Photo</Text></Button>
            
         
          
      <Button onPress={()=>this.createAccount()} block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text>Create Account</Text></Button>
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

