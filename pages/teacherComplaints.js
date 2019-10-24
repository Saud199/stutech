import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class TeacherComplaints extends Component {

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
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

  render() {
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

          <Text style={{ alignSelf: 'center', fontSize: 20}}>COMPLAINT DETAILS</Text>

          <Item floatingLabel last>
            <Label >Subject</Label>
            <Input />
          </Item>

          <Item floatingLabel last>
            <Label>Complaint Details</Label>
            <Input />
          </Item>

          <Text>{"\n"}</Text>
          <Label>Give ideas to avoid the problem</Label>
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
            <Label>Complaint As</Label>
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
                <Picker.Item label="Anonymous" value="anonymous" />
                <Picker.Item label="Non Anonoymous" value="nonanonoymous" />
                
              </Picker>
            </Item>



        </Form>

        <Button block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}}><Text> Submit </Text></Button>
        
        <Text>{"\n"}</Text>

      </Content>
      

    </Container>

    );
  }
  
}


export default withNavigation(TeacherComplaints);