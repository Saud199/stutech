import React, {Component} from 'react';
import { Image, ImageBackground  } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Button, Container, Header, Content,Item,Label,Input,Text,Form,Body, Picker, Title,Icon, Left, Right} from 'native-base';


class Signup2 extends Component {

  constructor() {
    super();

    this.state = {
      teacherfields:false,
      studentfields:true,
      type:'student',
      photo:null
    }

  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };
  
  accountType(val){
    if(val=='student'){
      this.setState({studentfields:true , teacherfields:false , type:val})
    }
    else{
    
      this.setState({studentfields:false , teacherfields:true , type:val})
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
  
           <Text style={{alignSelf:'center'}}>Hi User, Welcome to Stutech !</Text>
  
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
                onValueChange={(itemValue, itemIndex) =>
              
                  this.accountType(itemValue)
    
                }
              >
                <Picker.Item label="Student" value="student" />
                <Picker.Item label="Teacher" value="teacher" />
                
              </Picker>
            </Item>
          
         
          
        
          {studentfields && 
  
                      
           <Form>

            <Item floatingLabel last>
                  <Label >Roll Number</Label>
                  <Input />

            </Item>


            <Item floatingLabel last>
                  <Label >Section</Label>
                  <Input  />
                
            </Item>


            <Item floatingLabel last>
                  <Label >Department</Label>
                  <Input  />

            </Item>

            </Form>
            
          }




          {teacherfields &&  
             <Form>

             <Item floatingLabel last>
                   <Label >Employee ID</Label>
                   <Input />
 
             </Item>
 
 
             <Item floatingLabel last>
                   <Label >Designation</Label>
                   <Input  />
                 
             </Item>
 
 
             <Item floatingLabel last>
                   <Label >Department</Label>
                   <Input  />
 
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
            
         
          
      <Button onPress={() => alert("Account Created")} block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text>Create Account</Text></Button>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
         
  
                </Content>
        </ImageBackground>
         </Container>
    );
  }
  
}

export default Signup2;
