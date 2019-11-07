import React, {Component} from 'react';
import { Image, ImageBackground } from 'react-native';
import {Button, Container, Header, Content,Item,Label,Input,Text,Form,Body, Title, Left, Right, Icon, Picker} from 'native-base';
import { connect } from 'react-redux';
import {SignupDetail} from '../store/action/action.js';
class Signup1 extends Component {

  constructor() {
    super();
    // this.state={
    //   firstName : '',
    //   lastName : '',
    //   email : '',
    //   pass : '',
    //   rePass : '',
    //   phoneNo : '',
    //   securityQues : '',
    //   securityAns : '',
    //   gender : 'male'
    // }
    this.state={
      firstName : 'asd',
      lastName : 'asd',
      email : '',
      pass : '',
      rePass : '',
      phoneNo : 'asd',
      securityQues : 'asd',
      securityAns : 'asd',
      gender : 'male'
    }
  }




  getData(){
    const {firstName, lastName, email, pass, rePass, phoneNo, securityQues, securityAns, gender}=this.state;
    
    if(firstName.length == 0 || lastName.length==0 || email.length == 0 || pass.length==0 || rePass.length==0 || securityQues.length==0 || securityAns.length==0) {
      alert("Please fill out all the fields")
    }
    // else if(firstName.length<2){
    //   alert('Please Enter Your First name Correctly');
    // }
    // else if(lastName.length<2){
    //   alert('Please Enter Your Last name Correctly');
    // }
    // else if(email.length<6 || !email.includes('@')  || !email.includes('.')){
    //   alert('Please Enter A  Valid Email Address');
    // }
    // else if(pass.length<6 ){
    //   alert('Write Your Password Correctly. It must Contain 6 or more Characters');
    // }
    // else if(pass!=rePass ){
    //   alert('Password doesnot match');
    // }
    // else if(phoneNo.length<13 || phoneNo.length>13){
    //   alert('Please Must Write Your Number in this Format +923120000000')
    // }
    // 
    // else if(securityAns.length<2){
    //   alert('Please Write Correct Security Answer');
    //  }
    else{

       var obj = {
        firstName ,
        lastName ,
        email ,
        pass ,
        rePass ,
        phoneNo ,
        securityQues ,
        securityAns ,
        gender
       }
        
      this.props.getUserinfo(obj);
 
      this.props.navigation.navigate('Signup2')
 
    }
 
  }

  onValueChange2(value) {
    if (value == 'male') {
      this.setState({gender:value})
    } 
    else {
      this.setState({gender:value})
    }
  }

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

        <ImageBackground source={require('../images/background.jpg')} imageStyle={{opacity:.2}} style={{width: '100%', height: '100%'}}>

       <Content padder style={{ padding: 7 }}>

        <Image
          style={{width: 200, height: 180, alignSelf:"center"}} 
          source={require('../images/app_logo.png')}  />

        <Text>{"\n"}</Text>

         <Text style={{alignSelf:"center"}}>Want to signup as an organization ?<Text style={{color:'#14c2e0'}} onPress={() => this.props.navigation.navigate('OrganizationSignUp')} > Click Here</Text> </Text>

         <Form>

        <Item floatingLabel last>
              <Label >First Name</Label>
              <Input onChangeText={(txt) => this.setState({ firstName : txt })}  />

        </Item>

        
        <Item floatingLabel last>
              <Label >Last Name</Label>
              <Input onChangeText={(txt) => this.setState({ lastName : txt })} />
            
        </Item>


       <Item floatingLabel last>
              <Label >Enter Email</Label>
              <Input keyboardType="email-address" onChangeText={(txt) => this.setState({ email : txt })} />

       </Item>

       <Item floatingLabel last>
              <Label >Enter Password</Label>
              <Input secureTextEntry={true} onChangeText={(txt) => this.setState({ pass : txt })} />
        </Item>

        <Item floatingLabel last>
              <Label >Re-type Password</Label>
              <Input secureTextEntry={true} onChangeText={(txt) => this.setState({ rePass : txt })} />


         </Item>


         <Item floatingLabel last>
              <Label >Enter Contact Number</Label>
              <Input keyboardType="name-phone-pad" onChangeText={(txt) => this.setState({ phoneNo : txt })}/>
      
        </Item>


        <Item floatingLabel last>
              <Label >Add Security Question</Label>
              <Input onChangeText={(txt) => this.setState({ securityQues : txt })} />

        </Item>

        <Item floatingLabel last>
              <Label >Add Security Answer</Label>
              <Input onChangeText={(txt) => this.setState({ securityAns : txt })} />

        </Item>

        <Text>{"\n"}</Text>
        <Label style={{alignSelf:'center'}}>Gender</Label>
        <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your Gender"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.gender}
                onValueChange={this.onValueChange2.bind(this)}
          
              >
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </Item>



        </Form>
      

        <Text>{"\n"}</Text>

        {/* <Button  onPress={() => this.setDetail()} block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text> Next </Text></Button> */}
        <Button  onPress={() => this.getData()} block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text> Next </Text></Button>
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
    // jb class me data mangwana hota hy store se
  })
}
function mapDispatchToProp(dispatch) {
  return ({
     // jb class se data store me bhejna hota hai
       getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
  })
}


export default connect(mapStateToProp, mapDispatchToProp)(Signup1);

