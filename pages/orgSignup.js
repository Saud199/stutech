import React, {Component} from 'react';
import { StyleSheet, Text, View, ToolbarAndroid, Image, ScrollView, TextInput , TouchableOpacity, Picker, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

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
      <View style={styles.container}>

      <ToolbarAndroid
          style={styles.toolbar}
          titleColor= "#ffffff"
          title="Stutech" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Image
          style={{width: 200, height: 180}} 
          source={require('../images/app_logo.png')}  />

        <Text>{"\n"}</Text>

         <Text>Want to signup as a student or a teacher ?<Text style={{color:'#14c2e0'}} onPress={() => this.props.navigation.navigate('Signup1')} > Click Here</Text> </Text>

        <Text>{"\n"}</Text>
        
        <View >
        <TextInput 
        style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
        placeholder="Organization Name" />

         <Text>{"\n"}</Text>

        <TextInput 
        style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
        placeholder="Enter Email" />

         <Text>{"\n"}</Text>

        <TextInput 
        style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
        placeholder="Enter Password" />

         <Text>{"\n"}</Text>

        <TextInput 
        style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
        placeholder="Enter Contact Number" />

         <Text>{"\n"}</Text>

         <TextInput 
        style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
        placeholder="Enter Address" />

         <Text>{"\n"}</Text>

         <TextInput 
        style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
        placeholder="Enter Website Link" />

         <Text>{"\n"}</Text>


        </View>

        <Text>Organization Type</Text>

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


          </Picker>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 100, height: 100 }}
          />
           )}
            <Text>{"\n"}</Text>
          <Button title="Upload Logo" onPress={this.handleChoosePhoto} />
      </View>

        <Text>{"\n"}</Text>

        <TouchableOpacity
                style={styles.button}
                onPress={this.onPress}
              >
                <Text> Create Account </Text>
              </TouchableOpacity>


  

       


      </ScrollView>
      
    </View>
    );
  }
  
}

export default OrganizationSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 24,
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#14c2e0',
    width: 200,
    padding: 10
  },
  toolbar: {
    backgroundColor: '#14c2e0',
    height: 56,
    alignSelf: 'stretch',
  },
  scrollContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    paddingBottom: 40,
    marginTop: 24,
  },
});
