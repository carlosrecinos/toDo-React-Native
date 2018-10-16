import React, { Component, Fragment } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TextInput, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import _ from 'lodash';
import { Icon as ImportedIcon } from 'native-base';

const reactLogoUri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png';

export default class EditForm extends Component {
  state = {
    email: this.props.user.email,
    name: this.props.user.nombre,
    loading: false,
    error: '',
  }

  inputs = {}
  focusNext = (input) => {
    this.inputs[input].focus();
  }
  render() {
    const {
      email, name, loading, error,
    } = this.state;
    const { closeForm } = this.props;
    return (
      <Container>
        <KeyboardAvoidingView behavior="padding">
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Fragment>
              <Input
                name="username"
                innerRef={(ref) => { this.inputs.username = ref; }}
                onSubmitEditing={() => this.focusNext('password')}
                blurOnSubmit={false}
                returnKeyType="next"
                onChangeText={text => this.setState({ email: text })}
                value={email}
                bColor={error ? 'red' : 'black'}
              />
              <Input
                name="password"
                innerRef={(ref) => { this.inputs.password = ref; }}
                returnKeyType="send"
                onChangeText={text => this.setState({ name: text })}
                value={name}
              />
              <ButtonsContainer>
                <Button underlayColor="#CCCCCC" onPress={closeForm}>
                  <Fragment>
                    <Icon name="close" style={{ fontSize: 50, color: '#AAAAAA' }} />
                    <Text>Cancel</Text>
                  </Fragment>
                </Button>
                <Button underlayColor="#CCCCCC" onPress={closeForm}>
                  <Fragment>
                    <Icon name="checkmark" style={{ fontSize: 50, color: '#AAAAAA' }} />
                    <Text>Update</Text>
                  </Fragment>
                </Button>
              </ButtonsContainer>
            </Fragment>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const Container = styled(View)`
  height: 200px;
  width: 90%;
  margin: 0 auto;
`;
const Icon = styled(ImportedIcon)`
  margin-right: 10px;
`;
const Input = styled(TextInput)`
  border: 0px;
  background-color: #FFFFFF;
  width: 100%;
  height: 50px;
  margin: 5px 0px;
  font-size: 20;
  padding: 10px;
  color: ${prop => (prop.bColor ? prop.bColor : 'black')}
`;
const ButtonsContainer = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0px;
`;
const Button = styled(TouchableHighlight)`
  width: 40%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #DDDDDD;
`;
