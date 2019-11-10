import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Drawer, Root, Title, Item, Input, Tab, Tabs, ScrollableTab, Toast, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {Home} from '../components/studentSideBar.js';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';
import {PostDetail, OrganizationDetail, ReminderInfo} from '../store/action/action.js';



class StudentNewsFeed extends Component {

  constructor() {
    super();
    this.state ={
      newsFeedArray : [],
      JobsNF : []
      
    }

  }

  componentDidMount() {
    this.addData();
  }

  addData() {
     const {JobsNF} = this.state;

     firebase.database().ref(`/Jobs`).limitToLast(10).on("value", (snapshot)=> {
         
      snapshot.forEach((childSnapshot)=> {
       var d = childSnapshot.val();
     
       var obj = {
       id : d.id ,
       logo : d.clogo ,
       Jimg : d.image ,
       orgName : d.cname ,
       description : d.detail ,
       date : d.date ,
       experience : d.workType,
       type : d.jobType ,
       cid : d.cid ,
       category : d.category ,
       subject : d.subject,
       email : d.cemail,
       from : d.from
      }

      //alert(''+d.id);

      JobsNF.push(obj);
      this.setState({JobsNF})
      })
    })
    
  }

  addFav(i){
    const {JobsNF} = this.state;
    var data = this.props.details;
    var skey = firebase.database().ref("Favourite/"+data.rollNo).push();
    var obj = {
            id:skey.key,
            logo : JobsNF[i].logo ,
            Jimg : JobsNF[i].Jimg ,
            orgName : JobsNF[i].orgName ,
            description : JobsNF[i].description ,
            date : JobsNF[i].date ,
            experience : JobsNF[i].experience,
            type : JobsNF[i].type ,
            cid : JobsNF[i].cid ,
            category : JobsNF[i].category ,
            subject : JobsNF[i].subject,
            from : JobsNF[i].from
    }

    skey.set(obj);
    alert('Add Favourite Successfully')
  }

  viewProf(i){
      const {JobsNF} = this.state;

      var orgDetailsObj ={
        orgID : JobsNF[i].cid
      }

      this.props.orgInfo(orgDetailsObj);
      this.props.navigation.navigate('StudentViewOrganizations');
  }

  checkPostDetails(i){
    const {JobsNF} = this.state;

    detailsObj = {
      id : JobsNF[i].id ,
      logo : JobsNF[i].logo,
      Jimg : JobsNF[i].Jimg,
      orgName : JobsNF[i].orgName,
      description : JobsNF[i].description,
      date : JobsNF[i].date,
      experience : JobsNF[i].experience,
      type : JobsNF[i].type,
      cid : JobsNF[i].cid,
      category : JobsNF[i].category,
      subject : JobsNF[i].subject,
      orgEmail : JobsNF[i].email
    }

    this.props.postInfo(detailsObj);
    this.props.navigation.navigate('StudentViewPostFromNF')

  }

  reminderDetail(i){
    const {JobsNF}=this.state;

    remDetail = {
      oname : JobsNF[i].orgName,
      osubject : JobsNF[i].subject
    }

    this.props.remInfo(remDetail);
    this.props.navigation.navigate('StudentSetReminder');

  }




  closeDrawer () {
    this._drawer._root.close()
  };
  openDrawer () { 
    this._drawer._root.open() 
  };

  render() {
    const {JobsNF} = this.state;
    return (<Root>
      <Drawer 
        ref={(ref) => { this._drawer = ref; }} 
        content={<Home navigator={this._navigator} />} 
        onClose={() => this.closeDrawer()} >

          
      <Container>
        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={() => this.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('ContactsList')}>
              <Thumbnail square style={{width: 25, height: 25}}  source={require('../images/messenger.png')} />
            </Button>
          </Right>
        </Header>

        <Content style={{backgroundColor:'#D3D3D3'}}>
        { JobsNF.map((val , ind) => {
            return(

           
          
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:val.logo}} />
                <Body>
                  <Text>{val.orgName}</Text>
                  <Text note>{val.email}</Text>
                </Body>
              </Left>
            </CardItem>

            <Text style={{alignSelf:'center', color:'#14c2e0'}}>{val.subject}{"\n"}</Text>

            <CardItem cardBody>

            

              <Image  source={{uri : val.Jimg}} style={{height: 200, resizeMode:'contain', width: null, flex: 1}}/>
              
              
            </CardItem>
            <CardItem style={{flexDirection:'column'}}>
              
              <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                {/* <Button onPress={(e)=>this.addFav(ind)} block style={{backgroundColor: '#14c2e0' , width: 105}}><Text>Favourite</Text></Button> */}
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.reminderDetail(ind)}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/reminder.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.addFav(ind)}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/favourite.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.checkPostDetails(ind)}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/info.png')} />
                </Button>
                {(val.from == 'Organization' || val.from == undefined)  && <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.viewProf(ind)}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/profile_icon1.jpg')} />
            </Button> }
              </Body>
            </CardItem>
          </Card>
          
          

           )
          })
          }
        </Content>
        

        
      </Container>


      </Drawer></Root>
      
      
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
     postInfo : (info)=>{dispatch(PostDetail(info))},
     orgInfo : (info)=>{dispatch(OrganizationDetail(info))},
     remInfo : (info)=>{dispatch(ReminderInfo(info))},
  })
}


export default connect(mapStateToProp, mapDispatchToProp)(StudentNewsFeed);
