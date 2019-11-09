import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, Tabs, Tab, ScrollableTab, Card, CardItem, List, ListItem, Thumbnail } from 'native-base';
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import firebase from '../config/firebase.js';
import {AchievementDetail} from '../store/action/action.js';

class StudentAchievements extends Component {

    constructor() {
        super();
        this.state = { 
            myAchievements : [],
            subject : 'a',
            orgName : 'a',
            orgWeb : 'a',
            certificationDetails : 'a',
            achievedSkills : 'a',
            completionDate : 'a',
            type : 'All',
            speciality : 'All',
            image : ''
        };
      }
    
      componentDidMount(){
        this.addData()
      }
    

    // displayCertificates() {
    //     const {myAchievements} = this.state;
    //     myAchievements.push({name : 'Web & Mobile Application Development' , image : require('../images/c1.jpg')});
    //     myAchievements.push({name : 'Android Development' , image : require('../images/c2.jpg')});
    //     myAchievements.push({name : 'Speed Programming' , image : require('../images/c3.jpg')});
    // }


    selectType(value) {
      if (value == 'all') {
        this.setState({type:value})
      } 
      else if (value == 'Certificate') {
        this.setState({type:value})
      }
      else if (value == 'Diploma') {
        this.setState({type:value})
      }
      else if (value == 'Degree') {
        this.setState({type:value})
      }
    }


    selectSpeciality(value) {
      if (value == 'all') {
        this.setState({speciality:value})
      } 
      else if (value == 'Web , Mobile and Software developer') {
        this.setState({speciality:value})
      }
      else if (value == 'Ecommerce Development') {
        this.setState({speciality:value})
      }
      else if (value == 'Game Development') {
        this.setState({speciality:value})
      }
      if (value == 'Android App Development') {
        this.setState({speciality:value})
      } 
      else if (value == 'QA and Testing') {
        this.setState({speciality:value})
      }
      else if (value == 'Database') {
        this.setState({speciality:value})
      }
      else if (value == 'Web Development') {
        this.setState({speciality:value})
      }
      if (value == 'Web Designing') {
        this.setState({speciality:value})
      } 
      else if (value == 'IOS Development') {
        this.setState({speciality:value})
      }
      else if (value == 'All IT and Networking') {
        this.setState({speciality:value})
      }
      else if (value == 'Other') {
        this.setState({speciality:value})
      }
      
    }

    // handleChoosePhoto () { 
    //   const {image} = this.state;
    //   const options = {
    //     noData: true,
    //   };
    //   ImagePicker.launchImageLibrary(options, response => {
    //     if (response.uri) {
    //        this.setState({image:response.uri})
   
    //       } 
    //     })
    // }

    addData(){
      const{myAchievements}=this.state;

      var data = this.props.details;

    firebase.database().ref("Achievements").orderByChild("email").equalTo(""+data.email).on("value", (snapshot)=> {
      if(snapshot.exists()){
        snapshot.forEach((childSnapshot) => {
        var rdata = childSnapshot.val();
         var obj = {
          id : rdata.id ,
          logo : rdata.image ,
          orgName : rdata.orgName ,
          cerDetails : rdata.certificeDetail ,
          gettingSkills : rdata.skills ,
          CompletionDate : rdata.completeDate ,
          orgLink : rdata.orgLink ,
          speciality:rdata.speciality ,
          type : rdata.certificateType ,
          subject : rdata.subject
         }
        myAchievements.push(obj);
        this.setState({myAchievements})
      })
    }
     })
    
  }

  delete(id){

    firebase.database().ref(`Achievements/${id}`).set({});
    alert("Your data has been deleted.");
        
  }


  checkAchievementsDetails(i) {
    const {myAchievements} = this.state;
    var achievementsObj = {
      id : myAchievements[i].id ,
      logo : myAchievements[i].logo ,
      orgName : myAchievements[i].orgName ,
      cerDetails : myAchievements[i].cerDetails ,
      gettingSkills : myAchievements[i].gettingSkills ,
      CompletionDate : myAchievements[i].CompletionDate ,
      orgLink : myAchievements[i].orgLink ,
      speciality:myAchievements[i].speciality ,
      type : myAchievements[i].type ,
      subject : myAchievements[i].subject
     }
     
      this.props.achievementInfo(achievementsObj);
      this.props.navigation.navigate('StudentViewAchievementDetails');
  }




    async shareAchieve(){

      const {  myAchievements,subject, orgName, orgWeb, certificationDetails, achievedSkills, completionDate, type, speciality, image } = this.state;
      
      
      console.log(image);
      
      const response = await fetch(image);
        const blob = await response.blob();

        
      
      //  if(subject.length<1){
      //   alert('Please Fill Out Subject Field Correctly')
      //  }
      //  else if(orgName.length<1){
      //   alert('Please Write Out Organization Name Correctly')
      //  }
      //  else if(orgWeb.length<1){
      //   alert('Please Write Organization Website Link Correctly')
      //  }
      //  else if(certificationDetails.length<1){
      //   alert('Please Fill Out certification Field Correctly')
      //  }
      //  else if(achievedSkills.length<1){
      //    alert('Please Fill Your Achieved Skills Correctly')
      //  }
      //  else if(completionDate.length<1){
      //   alert('Please Write Completion date  Correctly')
      //  }
      //  else if (image==null){
      //   alert('Please Select Your Image')
      //  }
      // else if(type.includes('all')){
      //   alert('Please Select Degree Type ')
      //  }
      //  else if (special.includes('all')){
      //    alert('Please Select Youe Certificate Speciality')
      //  }
      //  else{
         
           while(myAchievements.length > 0) {
             myAchievements.splice(0,1); 
            }

            var metadata = {
              contentType: 'image/jpeg',
            };
            firebase.storage().ref('storage').child(''+(new Date()).getTime()).put(blob, metadata).then((res)=>{
              return res.ref.getDownloadURL();
            }).then(downloadURL=>{
               console.log('agaya')
              var data = this.props.details;

              var skey =firebase.database().ref('Achievements').push();

              var certificateObj = {
                userID : data.id ,
                rollNo : data.rollNo ,
                email : data.email ,
                id : skey.key,
                subject : subject ,
                orgName : orgName,
                orgLink : orgWeb ,
                certificeDetail : certificationDetails ,
                skills : achievedSkills ,
                completeDate : completionDate ,
                certificateType : type , 
                speciality : speciality ,
                image :  downloadURL ,
                userName : data.name ,
                myimg : data.imgURL
              }
              skey.set(certificateObj); 

              firebase.database().ref(`Student/${data.rollNo}/Achievements`).push().set({subject : subject});

              alert('Your Achievement Added Successfully')

            }).catch((error)=> { 
                  console.log(error)
            });
         
           
      //  }
   }

   handleChoosePhoto = () => {
    const {image} = this.state;
      const options = {
        noData: true,
      };
      ImagePicker.launchImageLibrary(options, response => {
        if (response.uri) {
          this.setState({ image: response.uri });
        }
      });
  };


  render() {
    const{photo,myAchievements}=this.state;
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

        <Tabs tabBarBackgroundColor="#14c2e0" renderTabBar={()=> <ScrollableTab />} >
          <Tab heading="My Achievements" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
          <Content style={{backgroundColor:'#D3D3D3'}}>
          { myAchievements.map((val , ind) => {
            return(
                
                <Card>
                  <CardItem cardBody>
                    <Image source={{uri : val.logo}} style={{height: 200, width: null, flex: 1, resizeMode:'contain'}}/>
                  </CardItem>
                  <CardItem style={{alignSelf:'center'}}>
                    <Text style={{alignSelf:'center', color:'#14c2e0'}}>{val.subject}</Text>
                  </CardItem>
                  <CardItem>
                    <Body style={{flexDirection:'row', justifyContent:'space-between'}}>

                      <Button transparent style={{width: 22, height: 22}} onPress={(e)=>{this.checkAchievementsDetails(ind)}}>
                        <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/info.png')} />
                      </Button>

                      <Button transparent style={{width: 22, height: 22}} onPress={(e)=>{this.delete(val.id)}}>
                        <Thumbnail square style={{width: 22, height: 22}}  source={require('../images/delete.png')} />
                      </Button>
                      
                    </Body>
                    {/* <Left>
                      <Button block style={{backgroundColor: '#14c2e0' , width : 120}}><Text>View Details</Text></Button>
                    </Left>
                    <Right>
                      <Button block style={{backgroundColor: '#14c2e0' , width : 120}}><Text>Delete</Text></Button>
                    </Right> */}
                  </CardItem>
                </Card>
                
                 )
                })
            }
            </Content>
          </Tab>

          <Tab heading="Add Achievement" tabStyle={{backgroundColor: '#14c2e0'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#ffffff'}} activeTabStyle={{backgroundColor: '#14c2e0'}}>
            <Content padder style={{ padding: 7 }}>

                <Form>

                    <Text style={{ alignSelf: 'center', fontSize: 20}}>ADD ACHIEVEMENT</Text>

                    <Item floatingLabel last>
                        <Label >Subject</Label>
                        <Input onChangeText={(txt) => this.setState({ subject : txt })}  value={this.state.subject} />
                    </Item>

                    <Item floatingLabel last>
                        <Label >Organization Name</Label>
                        <Input onChangeText={(txt) => this.setState({ orgName : txt })}  value={this.state.orgName} />
                    </Item>

                    <Item floatingLabel last>
                        <Label >Organization Website Link</Label>
                        <Input onChangeText={(txt) => this.setState({ orgWeb : txt })}  value={this.state.orgWeb} />
                    </Item>

                    <Text>{"\n"}</Text>

                    <Label>Certification Details</Label>
                    <Textarea rowSpan={4} bordered placeholder="Type Here..." />

                    <Item floatingLabel last>
                        <Label >Achieved Skills</Label>
                        <Input onChangeText={(txt) => this.setState({ certificationDetails : txt })}  value={this.state.certificationDetails} />
                    </Item>

                    <Text>{"\n"}</Text>

                    <Item floatingLabel last>
                        <Label >Completion Date</Label>
                        <Input onChangeText={(txt) => this.setState({ completionDate : txt })}  value={this.state.completionDate} />
                    </Item>

             <Text>{"\n"}</Text>
             <Label style={{alignSelf:'center'}}>Type</Label>
             <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your type"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.type}
                onValueChange={this.selectType.bind(this)}
          
              >
                <Picker.Item label="All" value="all" />
                <Picker.Item label="Certificate" value="Certificate" />
                <Picker.Item label="Diploma" value="Diploma" />
                <Picker.Item label="Degree" value="Degree" />
              </Picker>
            </Item>


            <Text>{"\n"}</Text>
             <Label style={{alignSelf:'center'}}>Speciality</Label>
             <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your Speciality"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.speciality}
                onValueChange={this.selectSpeciality.bind(this)}
          
              >
                <Picker.Item label="All" value="all" />
                <Picker.Item label="Web , Mobile and Software developer" value="Web , Mobile and Software developer" />
                <Picker.Item label="Ecommerce Development" value="Ecommerce Development" />
                <Picker.Item label="Game Development" value="Game Development" />
                <Picker.Item label="Android App Development" value="Android App Development" />
                <Picker.Item label="QA and Testing" value="QA and Testing" />
                <Picker.Item label="Database" value="Database" />
                <Picker.Item label="Web Development" value="Web Development" />
                <Picker.Item label="Web Designing" value="Web Designing" />
                <Picker.Item label="iOS Development" value="IOS Development" />
                <Picker.Item label="All IT and Networking" value="All IT and Networking" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
            </Item>


                    <Text>{"\n"}</Text>

                    {/* {photo && (
                        <Image
                            source={{ uri: photo.uri }}
                            style={{ width: 100, height: 100, alignSelf: 'center' }} />
                    )} */}
                    <Button transparent onPress={() => this.handleChoosePhoto()} block style={{ alignSelf:'center', marginTop: 10, marginBottom:20,color:'#000000'}}><Text>Choose Photo</Text></Button>

                </Form>

                <Button block onPress={() => this.shareAchieve()} style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}}><Text>Add Achievement</Text></Button>
        
                <Text>{"\n"}</Text>

            </Content>
          </Tab>
        </Tabs>



      </Container>

    );
  }
  
}


function mapStateToProp(state) {
  return ({
    details: state.root. studentInfo ,
    accounttype : state.root.accountType
  })
}
function mapDispatchToProp(dispatch) {
  return ({
      //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
      achievementInfo : (info)=>{ dispatch(AchievementDetail(info))}
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(StudentAchievements);