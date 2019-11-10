import React, {Component} from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';
import {PostDetail, OrganizationDetail} from '../store/action/action.js';

class StudentFavourites extends Component {

    constructor() {
        super();

        this.state ={
          favouritesArray : []
        }
    
    }

    displayFavourites() {
        const {favouritesArray} = this.state;

        var data = this.props.details;

        firebase.database().ref(`Favourite/${data.rollNo}`).on("value", (snapshot)=> {
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
      
          firebase.database().ref(`Favourite/${data.rollNo}/${favouritesArray[i].id}`).set({});
          this.state.favouritesArray.splice(i,1);
          this.setState({favouritesArray:this.state.favouritesArray})
          alert("Deleted Successfully");
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
      this.props.navigation.navigate('StudentViewPostDetails');

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
      this.props.navigation.navigate('StudentViewOrganizations');
    }


  render() {
    const {favouritesArray} = this.state;
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
          <Right />
        </Header>


        <Content style={{backgroundColor:'#D3D3D3'}}>


        { favouritesArray.map((val , ind) => {
            return(

           
          
                <Card>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri:val.logo}} />
                      <Body>
                        <Text>{val.orgName}</Text>
                        <Text note>{val.orgEmail}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <Text style={{alignSelf:'center', color:'#14c2e0'}}>{val.subject}{"\n"}</Text>
                  <CardItem cardBody>
                    <Image source={{uri : val.Jimg}} style={{height: 200, width: null, flex: 1, resizeMode:'contain'}}/>
                  </CardItem>
                  <CardItem style={{flexDirection:'column'}}>
                    
                   
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
    details: state.root.studentInfo ,
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

export default connect(mapStateToProp, mapDispatchToProp)(StudentFavourites);