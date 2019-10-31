import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer, Input, Item, Text, Thumbnail } from 'native-base';
import SideBar from '../components/studentSideBar.js';
export default class StudentAppBar extends Component {

    closeDrawer () {
        this._drawer._root.close()
    };
    openDrawer () { 
        this._drawer._root.open() 
    };

  render() {
    return (
        <Drawer 
        ref={(ref) => { this._drawer = ref; }} 
        content={<SideBar navigator={this._navigator} />} 
        onClose={() => this.closeDrawer()} >

          
      <Container>
        <Header style={{backgroundColor:'#14c2e0'}}>
          <Left>
            <Button transparent onPress={() => this.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Stutech</Title>
          </Body>
        </Header>



        {/* SEARCH BAR */}

        <Header searchBar rounded style={{backgroundColor:'#ffffff'}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
 

            

          </Item>
        </Header>

        
      </Container>


      </Drawer>

    );
  }
}