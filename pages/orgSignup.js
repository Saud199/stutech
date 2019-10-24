import React, {Component} from 'react';
import {Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Button, Container, Header, Content,Item,Label,Input,Text,Form,Body, Picker, Title,Icon, Left, Right} from 'native-base';


class OrganizationSignUp extends Component {

  constructor() {
    super();

    this.state = {
      orgType:'Software House',
      photo:null
    }

  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };

  accountType(val){
    if(val=='softwareHouse'){
      this.setState({type:val})
    }

    else if(val=='corporate'){
      this.setState({type:val})
    }

    else if(val=='insurance'){
      this.setState({type:val})
    }

    else if(val=='networking'){
      this.setState({type:val})
    }
    else{
    
      this.setState({type:val})
    }
  }


  render() {
    const{photo}=this.state
    
    return (

      <Container>

        <Header style={{backgroundColor:'#14c2e0'}}>
                
                <Left>
                    <Button transparent onPress={()=> this.props.navigation.navigate('Signup1')}>
                      <Icon name='arrow-back' />
                    </Button>
                </Left>
                  <Body>
                  <Title>Stutech</Title>
                  </Body>
                  <Right/>
                  </Header>
          
      <Content padder style={{ padding: 7 }}>
          

        <Image
          style={{width: 200, height: 180, alignSelf:'center'}} 
          source={require('../images/app_logo.png')}  />

        <Text>{"\n"}</Text>

         <Text style={{alignSelf:'center'}}>Want to signup as a student or a teacher ?<Text style={{color:'#14c2e0'}} onPress={() => this.props.navigation.navigate('Signup1')} > Click Here</Text> </Text>

        
        
        
        <Form>

                <Item floatingLabel last>
                      <Label >Organization Name</Label>
                      <Input />

                </Item>


                <Item floatingLabel last>
                      <Label >Enter Email</Label>
                      <Input keyboardType="email-address" />

                </Item>

                <Item floatingLabel last>
                      <Label >Enter Password</Label>
                      <Input secureTextEntry={true} />
                </Item>

                <Item floatingLabel last>
                      <Label >Enter Contact Number</Label>
                      <Input keyboardType="name-phone-pad" />

                </Item>

                <Item floatingLabel last>
                      <Label >Enter Address</Label>
                      <Input  />


                </Item>
                    
                    
                <Item floatingLabel last>
                      <Label >Enter Website Link</Label>
                      <Input  />


                </Item>
                    

                </Form>


                <Text>{"\n"}</Text>

              <Text style={{alignSelf:'center'}}>Organization Type</Text>


        <Item Picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined, alignSelf:'center' }}
                selectedValue={this.state.type}
                placeholder="Complaint As"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                onValueChange={(itemValue, itemIndex) =>
              
                  this.accountType(itemValue)
    
                }
              >
               
            <Picker.Item label="Software House" value="softwareHouse" />
            <Picker.Item label="Corporate" value="corporate" />
            <Picker.Item label="Insurance" value="insurance" />
            <Picker.Item label="Networking" value="networking" />
            <Picker.Item label="Other" value="other" />

                
              </Picker>
            </Item>
{/* 
        <Picker
            selectedValue={this.state.type}
            style={{height: 50, width: 165}}
            onValueChange={(itemValue, itemIndex) =>
              
              this.accountType(itemValue)

              

            }>

            <Picker.Item label="Software House" value="softwareHouse" />
            <Picker.Item label="Corporate" value="corporate" />
            <Picker.Item label="Insurance" value="insurance" />
            <Picker.Item label="Networking" value="networking" />
            <Picker.Item label="Other" value="other" />


          </Picker> */}

        
              {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 100, height: 100 }}
          />
           )}
            <Text>{"\n"}</Text>
            <Button transparent onPress={this.handleChoosePhoto} block style={{ alignSelf:'center', marginTop: 10, marginBottom:20,color:'#000000'}}><Text>Choose Photo</Text></Button>
          

        <Text>{"\n"}</Text>

        
        <Button onPress={() => alert("Account Created")} block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 10, marginBottom:20}}><Text>Create Account</Text></Button>
            
  
              </Content>
      </Container>
    );
  }
  
}

export default OrganizationSignUp;
