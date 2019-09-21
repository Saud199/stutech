import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text, Tabs, Tab, ScrollableTab, Card, CardItem, List, ListItem, Thumbnail } from 'native-base';
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';

class StudentAchievements extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            chosenDate: new Date(),
            photo:null,
            certificateArray : []
        };
        this.setDate = this.setDate.bind(this);
        // selected2: undefined
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
    
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
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

    displayCertificates() {
        const {certificateArray} = this.state;
        certificateArray.push({name : 'Web & Mobile Application Development' , image : require('../images/c1.jpg')});
        certificateArray.push({name : 'Android Development' , image : require('../images/c2.jpg')});
        certificateArray.push({name : 'Speed Programming' , image : require('../images/c3.jpg')});
    }



  render() {
    const{photo,certificateArray}=this.state;
    this.displayCertificates();
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
          <Content>
          { certificateArray.map((val , ind) => {
            return(
                
                <Card>
                  <CardItem cardBody>
                    <Image source={val.image} style={{height: 200, width: null, flex: 1}}/>
                  </CardItem>
                  <CardItem style={{alignSelf:'center'}}>
                    <Text>{val.name}</Text>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button block style={{backgroundColor: '#14c2e0' , width : 120}}><Text>View Details</Text></Button>
                    </Left>
                    <Right>
                      <Button block style={{backgroundColor: '#14c2e0' , width : 120}}><Text>Delete</Text></Button>
                    </Right>
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
                        <Input />
                    </Item>

                    <Item floatingLabel last>
                        <Label >Organization Name</Label>
                        <Input />
                    </Item>

                    <Item floatingLabel last>
                        <Label >Organization Website Link</Label>
                        <Input />
                    </Item>

                    <Text>{"\n"}</Text>

                    <Label>Certification Details</Label>
                    <Textarea rowSpan={4} bordered placeholder="Type Here..." />

                    <Item floatingLabel last>
                        <Label >Achieved Skills</Label>
                        <Input />
                    </Item>

                    <Text>{"\n"}</Text>

                    <Label>Completion Date</Label>
                    <DatePicker
                        defaultDate={new Date(2019, 4, 4)}
                        minimumDate={new Date(2000, 1, 1)}
                        maximumDate={new Date(2040, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        placeHolderTextStyle={{color:"#14c2e0"}}
                        textStyle={{ color: "green" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={this.setDate}
                        disabled={false} />


                    <Text>{"\n"}</Text>

                    {photo && (
                        <Image
                            source={{ uri: photo.uri }}
                            style={{ width: 100, height: 100, alignSelf: 'center' }} />
                    )}
                    <Button transparent onPress={this.handleChoosePhoto} style={{alignSelf:'center', marginTop: 40}}><Text style={{color:'#000000'}}>Choose Photo</Text></Button>

                </Form>

                <Button block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}}><Text>Add Achievement</Text></Button>
        
                <Text>{"\n"}</Text>

            </Content>
          </Tab>
        </Tabs>



      </Container>

    );
  }
  
}


export default withNavigation(StudentAchievements);