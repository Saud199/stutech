import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker,Thumbnail,Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text } from 'native-base';
import firebase from '../config/firebase.js';
import { connect } from 'react-redux';
import axios from 'axios';

class TeacherSendEmail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      subject : '',
      message : '',
    }


}
  


sendEmail(){
    const { subject , message } = this.state;
    var to =this.props.dynamic.email;
    var from = this.props.details.email;

          axios.post('https://stutech2019.herokuapp.com/send', {
            from , to , subject , message
          }).then((res) => {
            alert('Your email has been sent.');
          });
       
    
}

  render() {
  
    return (

      <Container>

        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate('TeacherViewStudentProfile')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>

      </Header>

      <Content padder style={{ padding: 7 }}>

        <Form>

        <Text style={{ alignSelf: 'center', fontSize: 20}}>Send Email</Text>

       
        <Text>{"\n"}</Text>
        
        <Text >From : {this.props.details.email}</Text>
        
         
        <Text>{"\n"}</Text>
        
        <Text>To : {this.props.dynamic.email}</Text>


        <Item floatingLabel last>
          <Label>Subject</Label>
          <Input onChangeText={(txt) => this.setState({ subject : txt })} value={this.state.subject} />
        </Item>

        <Text>{"\n"}</Text>
        <Label>Message</Label>
        <Textarea rowSpan={3} bordered placeholder="Type Here..." onChangeText={(txt) => this.setState({ message : txt })} value={this.state.message} />

        </Form>

        <Button block onPress={() => this.sendEmail()} style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}}><Text> Submit </Text></Button>
        
        <Text>{"\n"}</Text>

      </Content>
      

    </Container>

    );
  }
  
}


function mapStateToProp(state) {
  return ({
    details: state.root. teacherInfo ,
    accounttype : state.root.accountType,
    dynamic : state.root. dynamicInfo,
  })
}
function mapDispatchToProp(dispatch) {
  return ({
      //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(TeacherSendEmail);