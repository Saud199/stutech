import React, {Component} from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail } from 'native-base';
import firebase from '../config/firebase.js';
import { connect } from 'react-redux';
import {OrganizationDetail, OrganizationMoreDetails} from '../store/action/action.js';

class StudentViewOrganizations extends Component {

    constructor() {
        super();

        this.state ={
          organizationArray : []
        }
    
    }

    // displayOrganizations() {
    //     const {organizationArray} = this.state;
    //     organizationArray.push({name : 'SSUET' , web : 'www.ssuet.edu.pk' , add : 'Nipa, Gulshan' , orgType : 'Corporate' , image : require('../images/ssuet.png')});
    //     organizationArray.push({name : 'Oracle' , web : 'www.oracle.com' , add : 'Redwood City, California' , orgType : 'Database Company' , image : require('../images/oracle.png')});
    //     organizationArray.push({name : 'Decima AI' , web : 'www.decimaai.com' , add : 'DHA Phase-V, Karachi' , orgType : 'Software House' , image : require('../images/decima.png')});
    // }

    displayOrganizations() {
      const {organizationArray} = this.state;

      //var a = 

      if (this.props.orgDetails.orgID != null) {

        firebase.database().ref("/Users").orderByChild("id").equalTo(""+this.props.orgDetails.orgID).on("value", (snapshot)=> {
          snapshot.forEach((childSnapshot)=> {
            var data = childSnapshot.val();
            var orgObj = {
              orgName : data.name ,
              address : data.address ,
              email : data.email ,
              id : data.id ,
              logo : data.imgURL ,
              type : data.orgType ,
              number : data.ph_no ,
              websiteLink : data.webLink
             }
             organizationArray.push(orgObj)
             this.setState({organizationArray})
             this.props.orgInfo({});
             //localStorage.clear();
          })
        }) 

      }
      else {
        firebase.database().ref("/Users").orderByChild("accountType").equalTo("Organization").on("value", (snapshot)=> {
          snapshot.forEach((childSnapshot)=> {
            var data = childSnapshot.val();
            var orgObj = {
              orgName : data.name ,
              address : data.address ,
              email : data.email ,
              id : data.id ,
              logo : data.imgURL ,
              type : data.orgType ,
              number : data.ph_no ,
              websiteLink : data.webLink
             }
             organizationArray.push(orgObj)
             this.setState({organizationArray})
  
          })
        })
      }

      
  }

  viewMoreDetails(i) {
    const {organizationArray} = this.state;


    var orgObj = {
      orgName : organizationArray[i].orgName ,
      address : organizationArray[i].address ,
      email : organizationArray[i].email ,
      id : organizationArray[i].id ,
      logo : organizationArray[i].logo ,
      type : organizationArray[i].type ,
      number : organizationArray[i].number ,
      websiteLink : organizationArray[i].websiteLink
     }

     this.props.orgMoreInfo(orgObj);
     this.props.navigation.navigate('StudentViewOrganizationDetails');
  }

  componentDidMount() {
    this.displayOrganizations();
  }


  render() {
    const {organizationArray} = this.state;
  
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


        <Content padder style={{ padding: 7 }}>

        {/* <Text style={{ alignSelf: 'center', fontSize: 20}}>ORGANIZATIONS</Text> */}

        { organizationArray.map((val , ind) => {
            return(

          <List>
            <Image
            style={{width: 80, height: 80, alignSelf:'center', borderRadius:80/2}} 
            source={{uri : val.logo}} />

            <ListItem>
              {/* <Left>
                <Thumbnail square style={{width: 40, height: 40}}  source={val.image} />
              </Left> */}
              <Body>
                <Text style={{alignSelf:'center'}}>{val.orgName}</Text>
                <Text note numberOfLines={1} style={{alignSelf:'center'}}>{val.websiteLink}</Text>
                <Text note numberOfLines={2} style={{alignSelf:'center'}}>{val.address}</Text>
                <Text note numberOfLines={3} style={{alignSelf:'center'}}>{val.type}</Text>
                <Button block onPress={(e)=>this.viewMoreDetails(ind)} style={{backgroundColor:"#14c2e0", width: 150, height: 40 , marginTop:9, alignSelf:'center'}}>
                  <Text>Details</Text>
                </Button>
              </Body>
            </ListItem>
          </List>

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
    // jb class me data mangwana hota hy store se
    details: state.root. studentInfo ,
    accounttype : state.root.accountType,
    orgDetails : state.root.organizationInfo
  })
}
function mapDispatchToProp(dispatch) {
  return ({
     // jb class se data store me bhejna hota hai
     orgInfo : (info)=>{dispatch(OrganizationDetail(info))},
     orgMoreInfo : (info)=>{dispatch(OrganizationMoreDetails(info))},
  })
}


export default connect(mapStateToProp, mapDispatchToProp)(StudentViewOrganizations);