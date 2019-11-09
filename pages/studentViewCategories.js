import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Drawer, Root, Title, Item, Input, Tab, Tabs, ScrollableTab, Toast, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';
import {PostDetail, OrganizationDetail} from '../store/action/action.js';

class StudentViewCategories extends Component {

  constructor() {
    super();
    this.state ={
      categoriesArray : [],
      JobsNF : [],
      allNF : [],
      activePage : 0
    
      
    }

  }

  componentDidMount() {
    //this.validation();
    this.addAllData();
  }

  // validation(){
  //   var data = this.props.accounttype;
  //  if(data.includes('Student')){
  //   this.props.history.index=0;
  //  }else{
  //   alert('Please login to continue');
  //   this.props.history.push("/");
  //  }
  // }

  addAllData() {
    const {JobsNF, allNF} = this.state;

    while(JobsNF.length > 0) {
      JobsNF.splice(0,1); 
     }

    while(allNF.length > 0) {
     allNF.splice(0,1); 
    }

    firebase.database().ref('Jobs').on("value", (snapshot)=> {
      
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
      JobsNF.push(obj);
      allNF.push(obj)
      this.setState({JobsNF , allNF})
      })
    })


  }

  showCategdata(organizationType , ref){
    console.log("Sow categ " , organizationType.i);
    const {allNF , JobsNF, activePage} = this.state;
    var org ='';
    while(JobsNF.length > 0) {
      JobsNF.splice(0,1); 
      this.setState({JobsNF})
     }

     if(organizationType.i==0){ 
       this.addAllData()
       this.setState({activePage:0})
      }
     else if (organizationType.i == 1){ 
       org = 'Job' 
       this.setState({activePage:1})
      }
     else if (organizationType.i == 2){
       org = 'Internship'
       this.setState({activePage:2})
     }
     else if (organizationType.i == 3){
       org = 'Seminars'
       this.setState({activePage:3})
     }
     else if (organizationType.i == 4){
      org = 'Scholarship'
      this.setState({activePage:4})
     }
     else if (organizationType.i == 5){
      org = 'Other'
      this.setState({activePage:5})
     }
     
     
      allNF.map((val , ind)=>{
       
        if(val.type.includes(org)){
        
         var obj = {
           id : val.id ,
           logo : val.logo ,
           Jimg : val.Jimg ,
           orgName : val.orgName ,
           description : val.description ,
           date : val.date ,
           experience : val.experience,
           type : val.type ,
           cid : val.cid ,
           category : val.category ,
           subject : val.subject
          }
          JobsNF.push(obj)
          this.setState({JobsNF , activePage:organizationType})
        }
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
            subject : JobsNF[i].subject
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
      subject : JobsNF[i].subject
    }

    this.props.postInfo(detailsObj);
    this.props.navigation.navigate('StudentViewPostFromNF')

  }




  render() {
    const {categoriesArray, JobsNF, allNF} = this.state;
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
            <Button transparent>
             <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/filter.png')} />
            </Button>
          </Right>
        </Header>
        

        

        <Tabs onChangeTab={(i, ref) => this.showCategdata(i , ref)} tabBarBackgroundColor="#14c2e0" renderTabBar={()=> <ScrollableTab />} >
          <Tab  heading="All Posts" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
          <Content style={{backgroundColor:'#D3D3D3'}}>

          {JobsNF.length>0 &&

          JobsNF.map((val , ind) => {
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
            <Text style={{alignSelf:'center', color:'#14c2e0'}}>{val.category}{"\n"}</Text>
            <CardItem cardBody>

            

              <Image  source={{uri:val.Jimg}} style={{height: 200, resizeMode:'contain', width: null, flex: 1}}/>
             
              
            </CardItem>
            <CardItem style={{flexDirection:'column'}}>
              
              <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Button transparent style={{width: 22, height: 22}}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/reminder.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.addFav(ind)}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/favourite.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.checkPostDetails(ind)}>
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
          </Tab>

          <Tab  heading="Jobs" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
            <Content style={{backgroundColor:'#D3D3D3'}}>

          {JobsNF.length>0 &&

          JobsNF.map((val , ind) => {
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
            <Text style={{alignSelf:'center', color:'#14c2e0'}}>{val.category}{"\n"}</Text>
            <CardItem cardBody>

            

              <Image  source={{uri:val.Jimg}} style={{height: 200, resizeMode:'contain', width: null, flex: 1}}/>
             
              
            </CardItem>
            <CardItem style={{flexDirection:'column'}}>
              
              <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Button transparent style={{width: 22, height: 22}}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/reminder.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.addFav(ind)}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/favourite.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.checkPostDetails(ind)}>
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
          </Tab>

          <Tab  heading="Internships" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
            <Content style={{backgroundColor:'#D3D3D3'}}>

          {JobsNF.length>0 &&

          JobsNF.map((val , ind) => {
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
            <Text style={{alignSelf:'center', color:'#14c2e0'}}>{val.category}{"\n"}</Text>
            <CardItem cardBody>

            

              <Image  source={{uri:val.Jimg}} style={{height: 200, resizeMode:'contain', width: null, flex: 1}}/>
             
              
            </CardItem>
            <CardItem style={{flexDirection:'column'}}>
              
              <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Button transparent style={{width: 22, height: 22}}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/reminder.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.addFav(ind)}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/favourite.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.checkPostDetails(ind)}>
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
          </Tab>

          <Tab  heading="Seminars" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
            <Content style={{backgroundColor:'#D3D3D3'}}>

          {JobsNF.length>0 &&

          JobsNF.map((val , ind) => {
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
            <Text style={{alignSelf:'center', color:'#14c2e0'}}>{val.category}{"\n"}</Text>
            <CardItem cardBody>

            

              <Image  source={{uri:val.Jimg}} style={{height: 200, resizeMode:'contain', width: null, flex: 1}}/>
             
              
            </CardItem>
            <CardItem style={{flexDirection:'column'}}>
              
              <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Button transparent style={{width: 22, height: 22}}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/reminder.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.addFav(ind)}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/favourite.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.checkPostDetails(ind)}>
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
          </Tab>

          <Tab  heading="Scholarships" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
            <Content style={{backgroundColor:'#D3D3D3'}}>

          {JobsNF.length>0 &&

          JobsNF.map((val , ind) => {
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
            <Text style={{alignSelf:'center', color:'#14c2e0'}}>{val.category}{"\n"}</Text>
            <CardItem cardBody>

            

              <Image  source={{uri:val.Jimg}} style={{height: 200, resizeMode:'contain', width: null, flex: 1}}/>
             
              
            </CardItem>
            <CardItem style={{flexDirection:'column'}}>
              
              <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Button transparent style={{width: 22, height: 22}}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/reminder.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.addFav(ind)}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/favourite.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.checkPostDetails(ind)}>
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
          </Tab>

          <Tab heading="Other" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
            {JobsNF.length>0 &&

          JobsNF.map((val , ind) => {
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
            <Text style={{alignSelf:'center', color:'#14c2e0'}}>{val.category}{"\n"}</Text>
            <CardItem cardBody>

            

              <Image  source={{uri:val.Jimg}} style={{height: 200, resizeMode:'contain', width: null, flex: 1}}/>
             
              
            </CardItem>
            <CardItem style={{flexDirection:'column'}}>
              
              <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Button transparent style={{width: 22, height: 22}}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/reminder.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.addFav(ind)}>
                    <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/favourite.jpg')} />
                </Button>
                <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.checkPostDetails(ind)}>
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
          </Tab>
          
        </Tabs>

          
        

        
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
     postInfo : (info)=>{dispatch(PostDetail(info))},
     orgInfo : (info)=>{dispatch(OrganizationDetail(info))},
  })
}


export default connect(mapStateToProp, mapDispatchToProp)(StudentViewCategories);
