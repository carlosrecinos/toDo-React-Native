import React, { Component } from 'react';
import { View, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, Text } from 'native-base';
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash';

import { logIn } from '../../Actions/AppActions';

const reactLogoUri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png';

class Login extends Component {
  state = {
    username: 'emilio@gmail.com',
    password: 'emilio',
    loading: false,
    error: {},
  }

  onSubmit = () => {
    const { username, password } = this.state;
    this.setState({
      loading: true,
    });

    this.props.logIn(username, password)
      .then(() => {
        this.setState({ loading: false });
        this.props.navigation.navigate('App');
      })
      .catch((error) => {
        this.setState({ loading: false, error });
        console.warn('Error', error);
      });
  }

  inputsAreFilled = () => {
    const { username, password } = this.state;

    return !(username && password);
  }

  inputs = {}
  focusNext = (input) => {
    this.inputs[input].focus();
  }

  render() {
    const {
      username, password, loading, error,
    } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Container>
            <Title> Todo App </Title>
            <Logo source={{ uri: reactLogoUri }} />
            <Input
              name="username"
              innerRef={(ref) => { this.inputs.username = ref; }}
              onSubmitEditing={() => this.focusNext('password')}
              blurOnSubmit={false}
              returnKeyType="next"
              onChangeText={text => this.setState({ username: text })}
              value={username}
              placeholder="Username"
              bColor={!_.isEmpty(error) ? 'red' : 'black'}
            />
            <Input
              name="password"
              innerRef={(ref) => { this.inputs.password = ref; }}
              secureTextEntry
              returnKeyType="send"
              onChangeText={text => this.setState({ password: text })}
              value={password}
              placeholder="Password"
            />
            <ButtonContainer>
              {
                loading
                ?
                  <Button block light disabled onPress={this.onSubmit}>
                    <Text>Log in</Text>
                  </Button>
                :
                  <Button block light disabled={this.inputsAreFilled()} onPress={this.onSubmit}>
                    <Text>Log in</Text>
                  </Button>
              }
            </ButtonContainer>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const Container = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #DDDDDD;
  height: 100%

`;
const Title = styled(Text)`
  font-size: 50;
  color: #132640;
`;
const Logo = styled(Image)`
  width: 100;
  height: 100;
`;
const Input = styled(TextInput)`
  background-color: white;
  width: 80%;
  height: 50px;
  font-size: 20;
  margin: 5px;
  padding: 10px;
  color: ${prop => (prop.bColor ? prop.bColor : 'black')}
`;
const ButtonContainer = styled(View)`
  width: 80%;
  margin: 20px;
`;


const mapDispatchToProps = dispatch => ({
  logIn(email, password) {
    return dispatch(logIn(email, password));
  },
});
export default connect(null, mapDispatchToProps)(Login);
