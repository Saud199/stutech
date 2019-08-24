import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Content, Button, ListItem, Left, Right,Thumbnail,Body} from 'native-base';

export default class studentSideBar extends Component {

    render() {

        return(
    
            <Content style={{backgroundColor:'#ffffff'}}>

            <ListItem avatar>

            <Left>
                <Thumbnail source={require('../images/profilepic1.jpg')} />
            </Left>
                
            <Body>
                <Text>Abdul Ahad</Text>
            </Body>
            
            <Right>
                <Button><Text>Update</Text></Button>
            </Right>
            
            </ListItem>

            </Content>

    )};
}