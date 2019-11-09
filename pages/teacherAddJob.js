import React, {Component} from 'react';
import { Image  } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content,Thumbnail, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import firebase from '../config/firebase.js';

class TeacherAddJob extends Component {

  constructor(props) {
    super(); 
    this.state = {
        photo:null,
        type : 'Job',
        exp : 'Fresh',
        category : 'Web , Mobile and Software developer',
        subj : '',
        details : '',
        lastDate : '',
        image : ''
    }
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


  selectType(value) {
    if (value == 'Job') {
      this.setState({type:value})
    } 
    else if (value == 'Internship') {
      this.setState({type:value})
    }
    else if (value == 'Seminar') {
      this.setState({type:value})
    }
    else if (value == 'Scholarship') {
      this.setState({type:value})
    }
    else if (value == 'Other') {
      this.setState({type:value})
    }
  }


  selectWorkExperience(value) {
    if (value == 'Fresh') {
      this.setState({exp:value})
    } 
    else if (value == '3 to 6 months') {
      this.setState({exp:value})
    }
    else if (value == '6 to 12 months') {
      this.setState({exp:value})
    }
  }


  selectCategory(value) {
    if (value == 'Web , Mobile and Software developer') {
      this.setState({category:value})
    }
    else if (value == 'Ecommerce Development') {
      this.setState({category:value})
    }
    else if (value == 'Game Development') {
      this.setState({category:value})
    }
    if (value == 'Android App Development') {
      this.setState({category:value})
    } 
    else if (value == 'QA and Testing') {
      this.setState({category:value})
    }
    else if (value == 'Database') {
      this.setState({category:value})
    }
    else if (value == 'Web Development') {
      this.setState({category:value})
    }
    if (value == 'Web Designing') {
      this.setState({category:value})
    } 
    else if (value == 'IOS Development') {
      this.setState({category:value})
    }
    else if (value == 'All IT and Networking') {
      this.setState({category:value})
    }
    else if (value == 'Other') {
      this.setState({category:value})
    }
  }


  async addJob() {
    const {type, exp, category, subj, details, lastDate, image} = this.state;

    const response = await fetch(image);
    const blob = await response.blob();
        
        if(subj.length<1){
          alert('Please Fill Out Subject Field Correctly')
        }
        else if(details.length<10){
          alert('Please Write Description Correctly')
        }
        else if(lastDate.length<1){
          alert('Please Write Last Date')
        }
        else if(type.includes('none')){
          alert('Please Select Work Type')
        }
        else if (image==null){
          alert('Please Select Your Image')
        }
        else{

          var metadata = {
            contentType: 'image/jpeg',
          };

          firebase.storage().ref('storage').child(''+(new Date()).getTime()).put(blob, metadata).then((res)=>{
            return res.ref.getDownloadURL();
          }).then(downloadURL=>{
          
            var data = this.props.details;

            var skey =firebase.database().ref('Jobs').push();

            var jobObj = {
              cid : data.id ,
              clogo : data.imgURL ,
              cemail : data.email ,
              cname : data.name ,
              id : skey.key,
              subject : subj ,
              detail : details ,
              date : lastDate ,
              image :  downloadURL ,
              workType : exp ,
              jobType : type ,
              category : category,
              from : 'Teacher'
            }
            skey.set(jobObj); 


            alert('Your Job Post  Added Successfully');

          }).catch((error)=> { 
                console.log(error)
          });


        }

  }



  render() {
    const{photo}=this.state;
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
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('TeacherViewOwnPost')} >
              <Thumbnail square style={{width: 32, height: 32}}  source={require('../images/viewjob.png')} />
            </Button>
            </Right>
        </Header>

      <Content padder style={{ padding: 7 }}>

        <Form>

          <Text style={{ alignSelf: 'center', fontSize: 20}}>ADD JOB</Text>


          <Item floatingLabel last>
            <Label>Subject</Label>
            <Input onChangeText={(txt) => this.setState({ subj : txt })}  value={this.state.subj} />
          </Item>

          <Text>{"\n"}</Text>
          <Label>Details</Label>
          <Textarea rowSpan={4} bordered placeholder="Type Here..." onChangeText={(txt) => this.setState({ details : txt })}  value={this.state.details}/>
        
          <Text>{"\n"}</Text>
          <Item floatingLabel last>
            <Label >Last Date</Label>
            <Input onChangeText={(txt) => this.setState({ lastDate : txt })}  value={this.state.lastDate} />
          </Item>

            <Text>{"\n"}</Text>
            <Label style={{alignSelf:'center'}}>Type</Label>
             <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select Type"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.type}
                onValueChange={this.selectType.bind(this)}
          
              >
                <Picker.Item label="Job" value="Job" />
                <Picker.Item label="Internship" value="Internship" />
                <Picker.Item label="Seminar" value="Seminar" />
                <Picker.Item label="Scholarship" value="Scholarship" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
            </Item>


            <Text>{"\n"}</Text>
            <Label style={{alignSelf:'center'}}>Work Experience</Label>
             <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select Work Experience"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.exp}
                onValueChange={this.selectWorkExperience.bind(this)}
          
              >
                <Picker.Item label="Fresh" value="Fresh" />
                <Picker.Item label="3 to 6 months" value="3 to 6 months" />
                <Picker.Item label="6 to 12 months" value="6 to 12 months" />
              </Picker>
            </Item>


            <Text>{"\n"}</Text>
             <Label style={{alignSelf:'center'}}>Category</Label>
             <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select Category"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.category}
                onValueChange={this.selectCategory.bind(this)}
          
              >
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




        </Form>

        <Text>{"\n"}</Text>

        {/* {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 100, height: 100, alignSelf:'center' }}
          />
           )} */}
            
            <Button transparent onPress={() => this.handleChoosePhoto()} block style={{ alignSelf:'center', marginTop: 10, marginBottom:20,color:'#000000'}}><Text>Choose Photo</Text></Button>

            <Button block onPress={() => this.addJob()} style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}}><Text>Submit</Text></Button>
        
        <Text>{"\n"}</Text>

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
      // //  getUserinfo : (info)=>{ dispatch(SignupDetail(info))}
      // achievementInfo : (info)=>{ dispatch(AchievementDetail(info))}
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(TeacherAddJob);