import React, {Component} from 'react';
import { StyleSheet, Text, View, ToolbarAndroid, Image, ScrollView, TextInput , TouchableOpacity } from 'react-native';

class Login extends Component {

  render(){
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

        <TextInput 
        style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
        placeholder="Enter Email" />

        <Text>{"\n"}</Text>

        <TextInput 
        style={{width: 300, borderBottomColor:'#14c2e0', borderWidth: 2, borderTopColor:'#fff', borderLeftColor:'#fff', borderRightColor:'#fff'}}
        placeholder="Enter Password" />

        <Text>{"\n"}</Text>

        <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('StudentAfterLogin')}
              >
                <Text> Submit </Text>
              </TouchableOpacity>


        <Text>{"\n"}</Text>

        <Text>Don't have an account yet ?<Text style={{color:'#14c2e0'}} onPress={() => this.props.navigation.navigate('Signup1')} > Click Here</Text> </Text>

        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>

      </ScrollView>
      
    </View>
  );
  }
}

export default Login;

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
    marginTop: 24,
  },
});
