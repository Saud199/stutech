import React, {Component} from 'react';
import { StyleSheet, Text, View, ToolbarAndroid, Image, ScrollView, TextInput , TouchableOpacity, Picker, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class Signup2 extends Component {

  constructor() {
    super();

    this.state = {
      teacherfields:false,
      studentfields:true,
      type:'student',
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
    if(val=='student'){
      this.setState({studentfields:true , teacherfields:false , type:val})
    }
    else{
    
      this.setState({studentfields:false , teacherfields:true , type:val})
    }
  }
  
  render() {
    const{studentfields,teacherfields,photo}=this.state
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
  
           <Text>Hi User, Welcome to Stutech !</Text>
  
          <Text>{"\n"}</Text>
  
          <Text>Account Type</Text>
          <Picker
            selectedValue={this.state.type}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              
              this.accountType(itemValue)

              

            }>

            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Teacher" value="teacher" />

          </Picker>
          
          <View >
          {studentfields && <View>

  
          <TextInput 
          style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
          placeholder="Roll Number" />
  
           <Text>{"\n"}</Text>
  
          <TextInput 
          style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
          placeholder="Section" />
  
           <Text>{"\n"}</Text>
  
          <TextInput 
          style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
          placeholder="Department" />
          
          </View>}




          {teacherfields && <View>
            <TextInput 
          style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
          placeholder="Employee ID" />
  
           <Text>{"\n"}</Text>
  
          <TextInput 
          style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
          placeholder="Designation" />
  
           <Text>{"\n"}</Text>
  
          <TextInput 
          style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
          placeholder="Department" /></View>}
  
           <Text>{"\n"}</Text>


  
          </View>
  
          <Text>{"\n"}</Text>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 100, height: 100 }}
          />
           )}
            <Text>{"\n"}</Text>
          <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
  
          
      <Text>{"\n"}</Text>

          <TouchableOpacity
                  style={styles.button}
                  onPress={this.onPress}
                >
                  <Text onPress={() => alert("Account Created")}> Create Account </Text>
                </TouchableOpacity>
  
  
    
  
         
  
  
        </ScrollView>
        
      </View>
    );
  }
  
}

export default Signup2;

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
