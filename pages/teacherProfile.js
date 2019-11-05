import React, {Component} from 'react';
import { Image  } from 'react-native';
import { Container, Header, Content,Text,Body, Title, Left, Right,Item, Button, Icon, Input, Label} from 'native-base';
import firebase from '../config/firebase.js';
import { connect } from 'react-redux';

class TeacherProfile extends Component {

    constructor() {

        super();
      
        // this.state={

        //   Name:"Abdul Ahad",
        //   PhoneNo: "03032286816",
        //   Email: "abdulahad30396@gmail.com",
        //   Geneder: "Female",
        //   DOB: "30-03-1996",
        //   Address: "Fazal Mansion",

        //   ID: "2016-SE-024",
        //   Designation: "2016",
        //   Department: "Software Engineer",
          
        // }

        this.state = {
           emp_id : '' ,
           designation : '' ,
           name : '' ,
           phno : '' ,
           image : '' ,
           gender : '' ,
           email : '' ,
           department : '' ,
           qualifications:[]
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
            style={{width: 200, height: 200, alignSelf:'center', borderRadius:200/2}} 
            source={{uri:this.props.details.imgURL}}  />
  
            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000', alignSelf:'center', padding:5}}>PERSONAL INFORMATION </Text>
            <Text>{"\n"}</Text>
          
            <Text>Name : {this.props.details.name}</Text>

              <Text style={{marginTop:27}}>Gender : {this.props.details.gender}</Text>

              <Text style={{marginTop:27}}>Email : {this.props.details.email}</Text>

              <Text style={{marginTop:27}}>Phone Number : {this.props.details.number}</Text>
      


            
                <Text style={{marginTop:27}}>Date Of Birth : {this.props.details.DOB}</Text>
              

            

            
            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000', alignSelf:'center', padding:5}}>TEACHER INFORMATION </Text>
            <Text>{"\n"}</Text>


            <Text style={{marginTop:27}}>
                  Employee ID : {this.props.details.empID}
                </Text>
            
           
                <Text style={{marginTop:27}}>Designation : {this.props.details.designation}</Text>



                <Text style={{marginTop:27}}>Department : {this.props.details.department}</Text>


            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000', alignSelf:'center', padding:5}}>QUALIFICATIONS</Text>
            <Text>{"\n"}</Text>

            {/* {
              achievements.map((val , index ) => {
                return(
                     <Text>{ val.detail }</Text>
                )
             })

            } */}
        
           </Content>
   </Container>



            );

      }






}

function mapStateToProp(state) {
  return ({
    // jb class me data mangwana hota hy store se
    details: state.root. teacherInfo ,
    accounttype : state.root.accountType
  })
}
function mapDispatchToProp(dispatch) {
  return ({
     // jb class se data store me bhejna hota hai
    
  })
}


export default connect(mapStateToProp, mapDispatchToProp)(TeacherProfile);