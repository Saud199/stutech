import React, {Component} from 'react';
import { Image  } from 'react-native';
import { Container, Header, Content,Text,Body, Title, Left, Right, Button, Icon} from 'native-base';


class StudentProfile extends Component {

    constructor() {
        super();
    }


     render(){

        return(

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
          <Right />
        </Header>

    <Content padder style={{ padding: 7 }}> 

        <Image
            style={{width: 200, height: 180, alignSelf:'center'}} 
            source={require('../images/profilepic1.jpg')}  />
  
            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000'}}>PERSONAL INFORMATION </Text>
            <Text>{"\n"}</Text>
            <Text>Name: Muhammad Zubair</Text>
            <Text>Phone No: 03032286816</Text>
            <Text>Email: Muhammadzubair220@gmail.com</Text>
            <Text>Gender: Female </Text>
            <Text>DOB: 31-12-1997</Text>
            <Text>Address: Fazal Mansion Kharadar karachi</Text>

            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000'}}>STUDENT INFORMATION </Text>
            <Text>{"\n"}</Text>
            <Text>Roll No: 2016-SE-024</Text>
            <Text>Batch: 2016</Text>
            <Text>Department: Software</Text>
            

            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000'}}>ACADEMIC INFORMATION </Text>
            <Text>{"\n"}</Text>
            <Text>Matriculation: Fail</Text>
            <Text>Intermediate: Fail</Text>

            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000'}}>SKILLS</Text>
            <Text>{"\n"}</Text>
            <Text>Java</Text>
            <Text>JavaScript</Text>
            <Text>React.js</Text>

            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000'}}>ACHIEVEMENTS</Text>
            <Text>{"\n"}</Text>
            <Text>COMPELETE ANDROID</Text>
            <Text>COMPELETE PYTHON</Text>
            <Text>COMPELETE REACT-NATIVE</Text>

            
            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000'}}>ABOUT YOURSELF</Text>
            <Text>{"\n"}</Text>
            <Text>UPDATED SOON</Text>
           



        
           </Content>
   </Container>



            );

      }






}

export default StudentProfile;