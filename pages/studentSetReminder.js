import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Thumbnail, Picker, Input, Icon, Label, Textarea, Text } from 'native-base';

import firebase from '../config/firebase.js';
import { connect } from 'react-redux';


class StudentSetReminder extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            // rname : '' ,
            // rsubject : '' ,
            rdate : '' ,
            rtime : '' 
        
        }
      }

      setReminder(){ 
        const { rdate , rtime , open} = this.state;
        var data = this.props.details;
    
        // var name = rname;
        // var subject = rsubject;
        // var date = rdate;
        // var time = rtime;
    
    
        // if(rname.length<2){
        //     alert("Please Write Name Correctly");
        // }else if (rsubject.length<2){
        //     alert("Please Write Subject Correctly");
        // }
         if(rdate.length<10 || rdate.length>10){
            alert("Please Write date (DD-MM-YYYY) in this Format");
        }else if(rtime.length<8 || rtime.length>8){
            alert("Please Write time in 24 Hours (HH-MM-SS) in this Format")
        }
        else {
            var skey = firebase.database().ref(`reminder/${data.id}`).push();
             var obj = {
                id : skey.key ,
                name : this.props.reminfo.oname ,
                subject : this.props.reminfo.osubject ,
                date : rdate ,
                time : rtime 
             }
             skey.set(obj);
    
             var xhr = new XMLHttpRequest()
              xhr.addEventListener('load', () => {
                  console.log(xhr.responseText)
                    })
             xhr.open('GET', `http://smartsms.pk/json?api_token= 6ee650fde65d4b1a8136875e0190358ecb634db168688b66305b2d88ffda&api_secret=shahjahan123&to=${data.number}&from=Brand&date=${rdate}&time=${rtime}&message=You+set+a+reminder+for+${this.props.reminfo.osubject}+on+this+Date+${rdate}`)
             xhr.send()
    
            alert("Reminder Set Successfully")
            //  alert(this.props.reminfo.oname)
            //  alert(this.props.reminfo.osubject)
            //  alert(rdate)
            //  alert(rtime)
             
            this.setState({rdate:'' , rtime:''})
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
            
          </Right>
        </Header>
        


        
      <Content padder style={{ padding: 7 }}>

        <Form>

        <Text style={{ alignSelf: 'center', fontSize: 20}}>SET REMINDER</Text>

     
         
        <Text style={{marginBottom:20 , marginTop:8}}>Name : {this.props.reminfo.oname}</Text>
        
        

        <Text style={{marginTop:8}}>Subject : {this.props.reminfo.osubject}</Text>

    

        <Item floatingLabel last>
            <Label>Date</Label>
            <Input onChangeText={(txt) => this.setState({ rdate : txt })} value={this.state.rdate} />
        </Item>

        <Item floatingLabel last>
            <Label>Time</Label>
            <Input onChangeText={(txt) => this.setState({ rtime : txt })} value={this.state.rtime} />
        </Item>

        </Form>

        <Button block onPress={() => this.setReminder()} style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}}><Text> Submit </Text></Button>

        <Text>{"\n"}</Text>

        </Content>

        </Container>

      );
    }
    
  }

  
  

function mapStateToProp(state) {
    return ({
      details: state.root. studentInfo ,
      accounttype : state.root.accountType,
      reminfo : state.root.reminfo,
    })
  }
  function mapDispatchToProp(dispatch) {
    return ({
        //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
    })
  }
  
  export default connect(mapStateToProp, mapDispatchToProp)(StudentSetReminder);