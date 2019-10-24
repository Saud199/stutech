import React, {Component} from 'react';
import { Image  } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';

class TeacherAddJob extends Component {

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
    // selected2: undefined
    this.state = {
        photo:null
    }
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

  render() {
    const{photo}=this.state;
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

      <Content padder style={{ padding: 7 }}>

        <Form>

          <Text style={{ alignSelf: 'center', fontSize: 20}}>ADD JOB</Text>

          <Item floatingLabel last>
            <Label >Title</Label>
            <Input />
          </Item>

          <Item floatingLabel last>
            <Label>Subject</Label>
            <Input />
          </Item>

          <Text>{"\n"}</Text>
          <Label>Details</Label>
          <Textarea rowSpan={4} bordered placeholder="Type Here..." />
        
          <Text>{"\n"}</Text>
          <Label>Date</Label>
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
            disabled={false}
            />

            <Text>{"\n"}</Text>
            <Label>Post Type</Label>
            <Item Picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                selectedValue={this.state.selected2}
                placeholder="Complaint As"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Job" value="anonymous" />
                <Picker.Item label="Scholarship" value="nonanonoymous" />
                <Picker.Item label="Seminar" value="nonanonoymous" />
                <Picker.Item label="Other" value="nonanonoymous" />
                
              </Picker>
            </Item>



        </Form>

        <Text>{"\n"}</Text>

        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 100, height: 100, alignSelf:'center' }}
          />
           )}
            <Text>{"\n"}</Text>
          <Button transparent onPress={this.handleChoosePhoto} block style={{ alignSelf:'center', marginTop: 10, marginBottom:20,color:'#000000'}}><Text>Choose Photo</Text></Button>

        <Button block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}}><Text> Submit </Text></Button>
        
        <Text>{"\n"}</Text>

      </Content>
      

    </Container>

    );
  }
  
}


export default withNavigation(TeacherAddJob);