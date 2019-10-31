import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, List, ListItem, Thumbnail } from 'native-base';
import { withNavigation } from 'react-navigation';
import { Image, ImageBackground } from 'react-native';

class SplashScreen extends Component {

    componentWillMount() {
        setTimeout(() => {
            this.props.navigation.replace('Login')
        }, 3000

        );
    }

  render() {

    return (

      <Container>
        <ImageBackground source={require('../images/background.jpg')} imageStyle={{opacity:.2}} style={{width: '100%', height: '100%', flexDirection:'row', alignItems:'center'}}>
          <Content>

            <Image
                style={{width: 200, height: 180, alignSelf: 'center'}} 
                source={require('../images/app_logo.png')}  />


          </Content>
        </ImageBackground>
      </Container>

    );
  }
  
}


export default SplashScreen;