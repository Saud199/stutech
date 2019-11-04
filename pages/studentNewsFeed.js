import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Drawer, Root, Title, Item, Input, Tab, Tabs, ScrollableTab, Toast, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {Home} from '../components/studentSideBar.js';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';




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

     firebase.database().ref(`/Jobs`).on("value", (snapshot)=> {
         
      snapshot.forEach((childSnapshot)=> {
       var d = childSnapshot.val();
     
       var obj = {
       id : d.id ,
       logo : d.clogo ,
       Jimg : d.image ,
       orgName : d.cemail ,
       description : d.detail ,
       date : d.date ,
       experience : d.workType,
       type : d.jobType ,
       cid : d.cid ,
       category : d.category ,
       subject : d.subject
      }

      //alert(''+d.id);

      JobsNF.push(obj);
      this.setState({JobsNF})
      })
    })
    
     // newsFeedArray.push({name : 'SSUET' , image : require('../images/job.jpg')});
    // newsFeedArray.push({name : 'Oracle' , image : require('../images/oracle.png')});
    // newsFeedArray.push({name : 'Decima' , image : require('../images/decima.png')});
    // newsFeedArray.push({name : 'App Bakers' , image : require('../images/ssuet.png')});
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
            subject : JobsNF[i].subject
    }

    skey.set(obj);
    alert('Add Favourite Successfully')
  }

  viewProf(i){
      const {JobsNF} = this.state;
      localStorage.setItem('orgID' , JobsNF[i].cid);
      //this.props.history.push('./stuViewOrg')
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
                  <Text>Organization Name here</Text>
                  <Text note>{val.orgName}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>

            

              <Image  source={{uri : val.Jimg}} style={{height: 200, resizeMode:'contain', width: null, flex: 1}}/>
              
              
            </CardItem>
            <CardItem style={{flexDirection:'column'}}>
              <Text style={{alignSelf:'center', color:'#14c2e0'}}>{val.category}{"\n"}</Text>
              <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                {/* <Button onPress={(e)=>this.addFav(ind)} block style={{backgroundColor: '#14c2e0' , width: 105}}><Text>Favourite</Text></Button> */}
                <Button transparent style={{width: 22, height: 22}}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/reminder.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.addFav(ind)}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/favourite.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} >
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/info.png')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.viewProf(ind)}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/profile_icon1.jpg')} />
                </Button>
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
    
  })
}


export default connect(mapStateToProp, mapDispatchToProp)(StudentNewsFeed);
