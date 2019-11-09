import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';
import { Container, Content, Header,Icon,Left,Right,ListItem,List,Thumbnail,Body,Text,Button,Title } from 'native-base';
import { connect } from 'react-redux';
import firebase from '../config/firebase.js';
import {DynamicData, ContactDetail} from '../store/action/action.js'; 

class TeacherContactList extends Component {

    constructor() {
        super();

        this.state ={
          contactsArray : [],
          myChatList:[] ,
        }
    
    }

    componentDidMount() {
      this.showChatList();
    }


    showChatList() {
      const { myChatList } = this.state;alert("asad "+this.props.detailstech.id);

      firebase.database().ref(`chatList/${this.props.detailstech.id}`).on("value", (snapshot)=> {
        snapshot.forEach((childSnapshot) => {
     
            var obj = {
             id : childSnapshot.val().id ,
             logo : childSnapshot.val().image ,
             Name : childSnapshot.val().name ,
             Email : childSnapshot.val().email 
           }
           //console.log('ss' , childSnapshot.val().id)
           myChatList.push(obj);
           this.setState({myChatList})
          })
      })
    }

    goToChat(i) {
      const {myChatList} = this.state;

      var contactObj = {
        id : myChatList[i].id ,
        logo : myChatList[i].logo ,
        Name : myChatList[i].Name ,
        Email : myChatList[i].Email 
      }
      this.props.cntInfo(contactObj);
      this.props.navigation.navigate('TeacherMessenger');
    }


  render() {
    const {myChatList} = this.state;
    return (
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

                    <Content>

        { myChatList.map((val , ind) => {
                return(
            
            <List>
                <ListItem avatar  onPress={()=> this.goToChat(ind)}>
              <Left>
                <Thumbnail source={{uri:val.logo}} />
              </Left>
              <Body>
                <Text>{val.Name}</Text>
                <Text note>{val.Email}</Text>
              </Body>
              
            </ListItem>
          </List>
                )})}
                

            </Content>

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
  })
}
function mapDispatchToProp(dispatch) {
  return ({
    dInfo : (info4)=>{ dispatch(DynamicData(info4))},
    cntInfo : (info)=>{ dispatch(ContactDetail(info))},
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(TeacherContactList);