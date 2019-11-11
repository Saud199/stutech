import React, {Component} from 'react';
import { View } from 'react-native';
import { Container, Content, Header,Icon,Left,Right,ListItem,List,Input,Thumbnail,Subtitle,Body,Text,Button,Title, Footer, Item, FooterTab } from 'native-base';
import { connect } from 'react-redux';
import firebase from '../config/firebase.js'; 

class TeacherMessenger extends Component {

    constructor() {
        super();

        this.state ={
          myMessage:[],
          msgTxt : '',
        }
    
    }

    componentDidMount(){
      this.viewMessages();
    }


    sendMessage() {
      const {msgTxt} = this.state;

      if (msgTxt.length<1) {
        alert("Please write a message");
      }
      else {
        var skey =  firebase.database().ref( `chating/${this.props.contactDetails.id}/${this.props.contactDetails.id+this.props.detailstech.id}`).push();
        var dkey =  firebase.database().ref( `chating/${this.props.detailstech.id}/${this.props.detailstech.id+this.props.contactDetails.id}`).push();

        var chatMsgObj = {
          message: msgTxt,
          time: (new Date()).getTime(),
          id:this.props.detailstech.id
        }

        skey.set(chatMsgObj);
        dkey.set(chatMsgObj);
        this.setState({msgTxt : ''});
      }
    }

    viewMessages() {
      const { myChatList , pushNode1 , pushNode2 , myMessage , myid } = this.state;

      firebase.database().ref().child(`chating/${this.props.detailstech.id}/${this.props.detailstech.id+this.props.contactDetails.id}`).on('child_added', (snap) => {
  
        var obj = {
          message :  snap.val().message ,
          id : snap.val().id
        }
      myMessage.push(obj)
      this.setState({ myMessage })     
      })

    }

    deleteChatNode() {
      firebase.database().ref(`chating/${this.props.detailstech.id}/${this.props.detailstech.id+this.props.contactDetails.id}`).set({});
      firebase.database().ref(`chatList/${this.props.detailstech.id}/${this.props.contactDetails.id}`).set({});
      alert('Chat Deleted Successfully');
      this.props.navigation.navigate('TeacherContactList');
    }


  render() {
    const {myMessage} = this.state;
    return (
        <Container>

            <Header style={{backgroundColor:'#14c2e0', height: 100}}>
                    <Left style={{flexDirection:'row'}}>
                        <Button transparent onPress={()=> this.props.navigation.navigate('TeacherContactList')}>
                        <Icon name='arrow-back' />
                        </Button>
                        <Thumbnail source={{uri : this.props.contactDetails.logo}} style={{width : 45 , height : 45}} />
                    </Left>
                    <Body style={{marginLeft: 5}}>
                        <Title>{this.props.contactDetails.Name}</Title>
                        {/* <Subtitle>{this.props.contactDetails.Email}</Subtitle> */}
                        <Button block style={{ backgroundColor: '#04acc9', borderColor:'#000000',borderWidth:1 ,width:130, height:30, borderRadius:5, marginTop:10, marginRight:10, alignSelf:'flex-end'}} onPress={()=> this.deleteChatNode()} ><Text style={{color:'#ffffff'}}>Delete</Text></Button>
                    </Body>
            </Header>

            <Content padder style={{padding:7}}>

              {myMessage.map((val, ind) => {
                return(
                  <View>
                   {val.id == this.props.contactDetails.id && <Text style={{backgroundColor: '#cce5ff', alignSelf:'flex-start',width:180 , borderColor:'#cce5fe', borderWidth:1, padding:5, marginBottom:10 , borderRadius:5}}>{val.message}</Text> }
                    
                   {val.id == this.props.detailstech.id && <Text style={{backgroundColor: '#d4edda', alignSelf:'flex-end' , width:180 , borderColor:'#d4eddd', borderWidth:1, padding:5, marginBottom:10 , borderRadius:5}}>{val.message}</Text> }
                  </View>
                )
              })              
              
              }


            </Content>

            <Footer>

              <FooterTab style={{backgroundColor:'#ffffff'}}>

                <Item regular style={{flex:0.75}}>
                  <Input placeholder='Type a message' onChangeText={(txt) => this.setState({ msgTxt : txt })} value={this.state.msgTxt} />
                </Item>
                <Button block style={{ backgroundColor: '#14c2e0', flex: 0.25}} onPress={()=> this.sendMessage()}><Text style={{color:'#ffffff'}}>Send</Text></Button>
              </FooterTab>
    
            </Footer>

        </Container>
   
    );
  }
  
}

function mapStateToProp(state) {
  return ({
    cinfo: state.root.chatInfo ,
    detailsorg : state.root.organizationInfo,
    detailsadm : state.root.adminInfo,
    detailsstu : state.root.studentInfo,
    detailstech : state.root.teacherInfo,
    accounttype : state.root.accountType,
    contactDetails : state.root.contactInfo,
  })
}
function mapDispatchToProp(dispatch) {
  return ({
    dInfo : (info4)=>{ dispatch(DynamicData(info4))},
    cntInfo : (info)=>{ dispatch(ContactDetail(info))},
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(TeacherMessenger);