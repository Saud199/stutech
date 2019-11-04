import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Thumbnail, Picker, Input, Icon, Label, Textarea, Text } from 'native-base';
import firebase from '../config/firebase.js';
import { connect } from 'react-redux';

class StudentComplaints extends Component {

  constructor(props) {
    super(props);
    // selected2: undefined
    this.state = {
      subject : '',
      complaintDetails : '',
      idea : '',
      complaintDate : ''
    }
  }

  sendComplaint() {
    const {subject, complaintDetails, idea, complaintDate} = this.state;

    if (subject.length == 0 || complaintDate.length == 0 || idea.length == 0 || complaintDetails.length == 0) {
      alert("Please fill out all the fields")
    }
    else {
      var database = firebase.database().ref();
        
      var skey = firebase.database().ref('StudentComplain/').push();

      var data = this.props.details;

      var stuObj = {
        id : skey.key ,
        senderId : data.id ,
        name : data.name ,
        email : data.email ,
        rollNo : data.rollNo ,
        section : data.section ,
        department : data.department ,
        batch : data.batch,
        subject : subject ,
        date : complaintDate ,
        step : idea ,
        details : complaintDetails
      }

      skey.set(stuObj);

      this.setState({subject:'', complaintDate : '', idea : '', complaintDetails: ''});

      alert("Your Complaint has been sent");

    }
  }

  render() {
    return (

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
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('StudentViewOwnComplaints')}>
              <Thumbnail square style={{width: 32, height: 32}}  source={require('../images/complaint2.png')} />
            </Button>
          </Right>
        </Header>

      <Content padder style={{ padding: 7 }}>

        <Form>

          <Text style={{ alignSelf: 'center', fontSize: 20}}>COMPLAINT DETAILS</Text>

          <Item floatingLabel last>
            <Label >Subject</Label>
            <Input onChangeText={(txt) => this.setState({ subject : txt })} value={this.state.subject} />
          </Item>

          <Item floatingLabel last>
            <Label>Complaint Details</Label>
            <Input onChangeText={(txt) => this.setState({ complaintDetails : txt })} value={this.state.complaintDetails} />
          </Item>

          <Text>{"\n"}</Text>
          <Label>Give ideas to avoid the problem</Label>
          <Textarea rowSpan={4} bordered placeholder="Type Here..." onChangeText={(txt) => this.setState({ idea : txt })} value={this.state.idea} />
        
          <Item floatingLabel last>
                  <Label >Date</Label>
          <Input onChangeText={(txt) => this.setState({ complaintDate : txt })} value={this.state.complaintDate} />

          </Item>

        </Form>

        <Button block onPress={() => this.sendComplaint()} style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}}><Text> Submit </Text></Button>
        
        <Text>{"\n"}</Text>

      </Content>
      

    </Container>

    );
  }
  
}


function mapStateToProp(state) {
  return ({
    details: state.root. studentInfo ,
    accounttype : state.root.accountType
  })
}
function mapDispatchToProp(dispatch) {
  return ({
      //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(StudentComplaints);