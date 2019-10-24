import React, {Component} from 'react';
import { Image  } from 'react-native';
import { Container, Header, Content,Text,Body, Title, Left, Right,Item, Button, Icon, Input, Label} from 'native-base';


class TeacherProfile extends Component {

    constructor() {

        super();
      
        this.state={

          Name:"Abdul Ahad",
          PhoneNo: "03032286816",
          Email: "abdulahad30396@gmail.com",
          Geneder: "Female",
          DOB: "30-03-1996",
          Address: "Fazal Mansion",

          ID: "2016-SE-024",
          Designation: "2016",
          Department: "Software Engineer",
          
        }
    
      }


     render(){

      const {Name,PhoneNo,Email,Geneder,DOB,Address,ID,Designation,Department}=this.state;

        return(

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

        <Image
            style={{width: 200, height: 180, alignSelf:'center'}} 
            source={require('../images/profilepic2.jpg')}  />
  
            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000'}}>PERSONAL INFORMATION </Text>
            <Text>{"\n"}</Text>
          <Item>
            <Left>
            <Text>Name</Text>
            </Left>

            <Right>
            <Item floatingLabel last>
            
              <Input
              
              value={this.state.Name} 
              onChangeText={(txt) => this.setState({ Name: txt })} 
             
              />   
            </Item>
            </Right>
            </Item>

            <Item>
              <Left>
            <Label>Phone Number</Label>
            </Left>

            <Right>
            <Item floatingLabel last>
            
              <Input
              
              value={this.state.PhoneNo} 
              onChangeText={(txt) => this.setState({ PhoneNo: txt })} 
             
              />   
            </Item>
            </Right>
            </Item>


            <Item>

            <Left>
              <Text>Email</Text>
            </Left>
            <Right>
            <Item floatingLabel last>
              <Input
              
              value={this.state.Email} 
              onChangeText={(txt) => this.setState({ Email: txt })} 
             
              />   
            </Item>
            </Right>
            </Item>


            <Item>
              <Left>
                <Text>Gender</Text>
              </Left>
            <Right>
            <Item floatingLabel last>
              <Input
              
              value={this.state.Geneder} 
              onChangeText={(txt) => this.setState({ Geneder: txt })} 
             
              />   
            </Item>
            </Right>
            </Item>

            <Item>
              <Left>
                <Text>
                  Date Of Birth
                </Text>
              </Left>

              <Right>
            <Item floatingLabel last>
              <Input
              
              value={this.state.DOB} 
              onChangeText={(txt) => this.setState({ DOB: txt })} 
             
              />   
            </Item>
            </Right>
            </Item>


            <Item>
              <Left>
                <Text>Address</Text>
              </Left>

              <Right>
            <Item floatingLabel last>
              <Input
              
              value={this.state.Address} 
              onChangeText={(txt) => this.setState({ Address: txt })} 
             
              />   
            </Item>
            </Right>
            </Item>
            
            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000'}}>TEACHER INFORMATION </Text>
            <Text>{"\n"}</Text>

            
            <Item>
              <Left>
                <Text>ID</Text>
              </Left>

              <Right>
            <Item floatingLabel last>
              <Input
              
              value={this.state.ID} 
              onChangeText={(txt) => this.setState({ ID: txt })} 
             
              />   
            </Item>
            </Right>
            </Item>




            <Item>
              <Left>
                <Text>
                  Designation
                </Text>
              </Left>

              <Right>
            <Item floatingLabel last>
              <Input
              
              value={this.state.Designation} 
              onChangeText={(txt) => this.setState({ Designation: txt })} 
             
              />   
            </Item>
            </Right>
            </Item>



            <Item>
              <Left>
                <Text>Department</Text>
              </Left>

              <Right>

              
            <Item floatingLabel last>
              <Input
              
              value={this.state.Department} 
              onChangeText={(txt) => this.setState({ Department: txt })} 
             
              />   
            </Item>
            </Right>
            </Item>

            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000'}}> Qualification </Text>
            <Text>{"\n"}</Text>
            
            <Item>
              
                <Text>
                  Not Added
                </Text>
              
            </Item>

           
        <Button  block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40, marginBottom:30}}><Text>Update</Text></Button>



        
           </Content>
   </Container>



            );

      }






}

export default TeacherProfile;