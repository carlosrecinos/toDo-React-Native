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
import LoginScreen from './components/login/Login'

export default class App extends Component{
  
  
  render() {
    return (
      <View>
        <LoginScreen />
      </View>
    );
  }
}
