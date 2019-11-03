import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Right, Content, DatePicker, Form, Button, Item, Picker, Input, Icon, Label, Textarea, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class StudentComplaints extends Component {

  constructor(props) {
    super(props);
    // selected2: undefined
    this.state = {
      subject : '',
      complaintDetails : '',
      ideas : '',
      complaintDate : ''
    }
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
            <Input onChangeText={(txt) => this.setState({ subject : txt })} />
          </Item>

          <Item floatingLabel last>
            <Label>Complaint Details</Label>
            <Input onChangeText={(txt) => this.setState({ complaintDetails : txt })} />
          </Item>

          <Text>{"\n"}</Text>
          <Label>Give ideas to avoid the problem</Label>
          <Textarea rowSpan={4} bordered placeholder="Type Here..." onChangeText={(txt) => this.setState({ idea : txt })} />
        
          <Item floatingLabel last>
                  <Label >Date</Label>
                  <Input onChangeText={(txt) => this.setState({ complaintDate : txt })}/>

          </Item>

        </Form>

        <Button block style={{width: 200 , backgroundColor: '#14c2e0', alignSelf:'center', marginTop: 40}}><Text> Submit </Text></Button>
        
        <Text>{"\n"}</Text>

      </Content>
      

    </Container>

    );
  }
  
}


export default withNavigation(StudentComplaints);