import React, {Component} from 'react';
import { Image  } from 'react-native';
import { Container, Header, Content,Text,Body, Title, Left, Right,Item, Button, Icon, Input, Label} from 'native-base';
import firebase from '../config/firebase.js';
import { connect } from 'react-redux';

class StudentProfile extends Component {

    constructor() {

        super();
      
        

        this.state = {
          yourself : 'No data found' ,
           matric : 'No data found' ,
           inter : 'No data found' ,
           skills : 'No data found' ,
           name : '' ,
           phno : '' ,
           image : '' ,
           gender : '' ,
           email : '' ,
           department : '' ,
           batch : '' , 
           achievements:[]
        }
    
      }

      getUserDetails() {
        const {  yourself  , matric  , inter , skills  , name  , phno  , image  , gender  , email  , department , batch , achievements} = this.state;  
        var data = this.props.details;

        firebase.database().ref(`Student/${data.rollNo}`).on("value", (snapshot)=> {
    
          if(snapshot.exists()){
    
          if(snapshot.hasChild("aboutYourSelf")){
            this.setState({  yourself : snapshot.val().aboutYourSelf.detail })
          }
    
          if(snapshot.hasChild("Matric")){
            this.setState({  matric : snapshot.val().Matric.detail })
          }
    
          if(snapshot.hasChild("Inter")){
            this.setState({  inter : snapshot.val().Inter.detail })   
          }
    
          if(snapshot.hasChild("Skills")){
            this.setState({  skills : snapshot.val().Skills.detail })    
          }
    
          if(snapshot.hasChild("StudentInfo")){
         this.setState({ batch : snapshot.val().StudentInfo.batch }) 
         this.setState({ department : snapshot.val().StudentInfo.department}) 
         this.setState({ email :snapshot.val().StudentInfo.email}) 
         this.setState({ gender :snapshot.val().StudentInfo.gender})
         this.setState({ image :snapshot.val().StudentInfo.image})  
         this.setState({ name : snapshot.val().StudentInfo.name}) 
         this.setState({ phno : snapshot.val().StudentInfo.ph_no})     
          }
    
          if(snapshot.hasChild("Achievements")){
            while(achievements.length > 0) {
                  achievements.splice(0,1); 
               }
            firebase.database().ref(`Student/${data.rollNo}/Achievements`).on("value", (snapshot)=> {
                snapshot.forEach((childSnapshot)=> {
                   achievements.push({detail : childSnapshot.val().subject})
                   this.setState({achievements})
                })
            })
          }
    
           this.setState({})
          }
        })




      }

      componentDidMount() {
        this.getUserDetails();
      }


     render(){

      const {achievements}=this.state;
      const data = this.props.details;

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
            style={{width: 200, height: 200, alignSelf:'center', borderRadius:200/2}} 
            source={{uri:data.imgURL}}  />
  
            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000', alignSelf:'center', padding:5}}>PERSONAL INFORMATION </Text>
            <Text>{"\n"}</Text>
          
            <Text>Name : {data.name}</Text>

              <Text style={{marginTop:27}}>Gender : {data.gender}</Text>

              <Text style={{marginTop:27}}>Email : {data.email}</Text>

              <Text style={{marginTop:27}}>Phone Number : {data.number}</Text>
      

            {/* <Item>
              <Left>
            <Label style={{fontSize:14 , marginTop:30, marginBottom:10}}>Phone Number</Label>
            </Left>

            <Right>
            <Item floatingLabel last>
            
              <Input
              style={{fontSize:14}}
              value={this.state.phno} 
              onChangeText={(txt) => this.setState({ PhoneNo: txt })} 
             
              />   
            </Item>
            </Right>
            </Item> */}

        

            
                <Text style={{marginTop:27}}>Date Of Birth : {data.DOB}</Text>
              

            

            
            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000', alignSelf:'center', padding:5}}>STUDENT INFORMATION </Text>
            <Text>{"\n"}</Text>

            
           
                <Text>Department : {data.department}</Text>



                <Text style={{marginTop:27}}>
                  Roll No : {data.rollNo}
                </Text>



                <Text style={{marginTop:27}}>Batch : {data.batch}</Text>

            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000', alignSelf:'center', padding:5}}>ACADEMIC INFORMATION </Text>
            <Text>{"\n"}</Text>
            
                <Text>Matriculation : {this.state.matric}</Text>
             


        
              <Text style={{marginTop:27}}>Intermediate : {this.state.inter}</Text>



            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000', alignSelf:'center', padding:5}}>SKILLS</Text>
            <Text>{"\n"}</Text>

              <Text>{this.state.skills}</Text>
            

            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000', alignSelf:'center', padding:5}}>ACHIEVEMENTS</Text>
            <Text>{"\n"}</Text>

            {
              achievements.map((val , index ) => {
                return(
                     <Text>{ val.detail }</Text>
                )
             })

            }

            
            <Text>{"\n"}</Text>
            <Text style={{backgroundColor:'#14c2e0',borderColor:'#000000', alignSelf:'center', padding:5}}>ABOUT YOURSELF</Text>
            <Text>{"\n"}</Text>

            <Text>{this.state.yourself}</Text>
            <Text>{"\n"}</Text>


        
           </Content>
   </Container>



            );

      }






}

function mapStateToProp(state) {
  return ({
    // jb class me data mangwana hota hy store se
    details: state.root. studentInfo ,
    accounttype : state.root.accountType
  })
}
function mapDispatchToProp(dispatch) {
  return ({
     // jb class se data store me bhejna hota hai
    
  })
}


export default connect(mapStateToProp, mapDispatchToProp)(StudentProfile);
