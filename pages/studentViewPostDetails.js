import React, {Component} from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail, Card, CardItem} from 'native-base';
import { withNavigation } from 'react-navigation';
import firebase from '../config/firebase.js'
import { connect } from 'react-redux';


class StudentViewPostDetails extends Component {

    constructor() {
        super();

        this.state ={
          descriptionArray : []
        }
    
    }


  render() {
    const {favouritesArray} = this.state;
    return (

      <Container>

        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.navigate('StudentFavourites')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>
          <Right />
        </Header>


        <Content padder style={{ padding: 7 }}>
                <CardItem>
                    <Left>
                      <Thumbnail source={{uri : this.props.postDetails.logo}} />
                      <Body>
                        <Text>{this.props.postDetails.orgName}</Text>
                        <Text note>{this.props.postDetails.orgEmail}</Text>
                      </Body>
                    </Left>
                </CardItem>
                <Text style={{alignSelf:'center', color:'#14c2e0'}}>{this.props.postDetails.subject}</Text>
                <CardItem cardBody>
                    <Image source={{uri : this.props.postDetails.Jimg}} style={{height: 200, width: null, flex: 1, resizeMode:'contain'}}/>
                </CardItem>

                <Text>{"\n"}</Text>

                <View style={{borderBottomColor:'black',borderBottomWidth:1}}></View>


                <Text style={{fontWeight:'bold', marginTop:12, marginBottom : 10}}>Last Date : <Text style={{fontWeight:'normal'}}>{this.props.postDetails.date}</Text></Text>

                <Text style={{fontWeight:'bold', marginBottom : 10}}>Category : <Text style={{fontWeight:'normal'}}>{this.props.postDetails.category}</Text></Text>


                <Text style={{fontWeight:'bold', marginBottom : 10}}>Event Type : <Text style={{fontWeight:'normal'}}>{this.props.postDetails.type}</Text></Text>


                <Text style={{fontWeight:'bold', marginBottom : 10}}>Work Experience : <Text style={{fontWeight:'normal'}}>{this.props.postDetails.experience}</Text></Text>

                <View style={{borderBottomColor:'black',borderBottomWidth:1}}></View>

                <Text style={{fontWeight:'bold', marginTop : 10}}>Description :-</Text>
                <Text style={{fontWeight:'normal', marginBottom : 12}}>{this.props.postDetails.description}</Text>



        </Content>


      </Container>

    );
  }
  
}


function mapStateToProp(state) {
  return ({
    details: state.root.studentInfo ,
    accounttype : state.root.accountType,
    postDetails : state.root.postInfo
  })
}
function mapDispatchToProp(dispatch) {
  return ({
      //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(StudentViewPostDetails);
