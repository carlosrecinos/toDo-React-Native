/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import styled,{keyframes} from 'styled-components'
import Logo from '../../../react.svg'
import { Header, Content, Form, Item, Input, Label } from 'native-base';
const Container = styled.View`
  background-color: #7c43bd;
  width : 100%
  height : 100%
`;
const Title = styled.Text`
  font-family : Comic Sans MS;
  color : lightgray;
  font-size : 40;
  text-align : center;
  margin : 10px;
`
const ReactLogo = styled.Image`
  height : 20%;
  width : 30%;
  margin-left : 35%;
`
const LoginButton = styled.TouchableHighlight`
  height : 10%;
  width : 80%;
  margin-left : 10%;
  background-color : #4a148c;
  border-radius : 5px;
`
const LoginButtonText = styled.Text`
  font-size : 30;
  color : white;
  text-align : center;
  margin-top : 25px;
`
const InputUsername = styled.TextInput`
  width : 80%;
  height : 7%;
  border-radius : 5px;
  background-color : white;
  margin : 10%;
  border-color : red
`
const InputPassword = styled.TextInput`
  width : 80%;
  height : 7%;
  border-radius : 5px;
  background-color : white;
  margin-top : 0%;
  margin-bottom : 10%;
  margin-left : 10%;
  border-color : red
`
export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      showMessage : false
    }
  }
  onPress = ()=> {
    this.setState({
      showMessage : !this.state.showMessage
    })
  }
  render() {
    return (
      <Container>
        <Title>React-Native :)</Title>
        <ReactLogo source={Logo} />
        <InputUsername placeholder="Username" />
        <InputPassword placeholder="Password" />
        <Header />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
