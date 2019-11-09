import React, {Component} from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';
import {PostDetail, OrganizationDetail} from '../store/action/action.js';


class TeacherFavourites extends Component {

    constructor() {
        super();

        this.state ={
          favouritesArray : []
        }
    
    }

    displayFavourites() {
        const {favouritesArray} = this.state;
    //     favouritesArray.push({name : 'SSUET' , image : require('../images/ssuet.png')});
    //     favouritesArray.push({name : 'Oracle' , image : require('../images/oracle.png')});
    //     favouritesArray.push({name : 'Decima' , image : require('../images/decima.png')});
    //     favouritesArray.push({name : 'App Bakers' , image : require('../images/ssuet.png')});
    
  
    var data = this.props.details;

    firebase.database().ref(`Favourite/${data.empID}`).on("value", (snapshot)=> {
      if(snapshot.exists()){
       snapshot.forEach((childSnapshot)=> {
        var d = childSnapshot.val();
        var obj = {
        id : d.id ,
        logo : d.logo ,
        Jimg : d.Jimg ,
        orgName : d.orgName ,
        description : d.description ,
        date : d.date ,
        experience : d.experience,
        type : d.type ,
        cid : d.cid ,
        category : d.category ,
        subject : d.subject
       }
       favouritesArray.push(obj);
       this.setState({favouritesArray})
       })
      }
     })


  }


  deleteFavorite(i) {
    const {favouritesArray} = this.state;
    var data = this.props.details;
    
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.value) {
        firebase.database().ref(`Favourite/${data.empID}/${favouritesArray[i].id}`).set({});
        alert("Deleted Successfully");
        // Swal.fire(
        //   'Deleted!',
        //   'Your data has been deleted.',
        //   'success'
        // )
      //}
    //}) 
  }


  checkDetails(i){
    const {favouritesArray} = this.state;

    //alert(""+favouritesArray[i].orgName);

    detailsObj = {
      id : favouritesArray[i].id ,
      logo : favouritesArray[i].logo,
      Jimg : favouritesArray[i].Jimg,
      orgName : favouritesArray[i].orgName,
      description : favouritesArray[i].description,
      date : favouritesArray[i].date,
      experience : favouritesArray[i].experience,
      type : favouritesArray[i].type,
      cid : favouritesArray[i].cid,
      category : favouritesArray[i].category,
      subject : favouritesArray[i].subject
    }

    this.props.postInfo(detailsObj);
    this.props.navigation.navigate('TeacherViewPostDetails')

  }

  componentDidMount() {
    this.displayFavourites();
  }


  viewProf(i){
    const {favouritesArray} = this.state;

    var orgDetailsObj ={
      orgID : favouritesArray[i].cid
    }

    this.props.orgInfo(orgDetailsObj);
    //localStorage.setItem('orgID' , JobsNF[i].cid);
    //this.props.history.push('./stuViewOrg')
    this.props.navigation.navigate('TecaherViewOrganization');
  }



  render() {
    const {favouritesArray} = this.state;
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

        { favouritesArray.map((val , ind) => {
            return(

           
          
                <Card>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri:val.logo}} />
                      <Body>
                        <Text>Ogranization Name goes here</Text>
                        <Text note>{val.orgName}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={{uri : val.Jimg}} style={{height: 200, width: null, flex: 1, resizeMode:'contain'}}/>
                  </CardItem>
                  <CardItem style={{flexDirection:'column'}}>
                    {/* <Left>
                      <Button block style={{backgroundColor: '#14c2e0' , width : 120}}><Text>Profile</Text></Button>
                    </Left> */}
                    <Text style={{alignSelf:'center', color:'#14c2e0'}}>{val.category}{"\n"}</Text>
                    <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                      <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.viewProf(ind)}>
                        <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/profile_icon1.jpg')} />
                      </Button>
                      <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.checkDetails(ind)}>
                        <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/info.png')} />
                      </Button>
                      <Button transparent style={{width: 22, height: 22}} onPress={(e)=>this.deleteFavorite(ind)}>
                        <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/delete.png')} />
                      </Button>
                    </Body>
                    {/* <Right>
                      <Button block style={{backgroundColor: '#14c2e0' , width : 120}} onPress={(e)=>this.deleteFavorite(ind)}><Text>Delete</Text></Button>
                    </Right> */}
                  </CardItem>
                </Card>
                
                
      
                 )
                })
        }



        </Content>


      </Container>

    );
  }
  
}


function mapStateToProp(state) {
  return ({
    details: state.root.teacherInfo ,
    accounttype : state.root.accountType
  })
}
function mapDispatchToProp(dispatch) {
  return ({
      //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
      postInfo : (info)=>{dispatch(PostDetail(info))},
      orgInfo : (info)=>{dispatch(OrganizationDetail(info))},
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(TeacherFavourites);