import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class TaskDetail extends Component {
  render() {
    const { navigation } = this.props;
    console.warn(navigation);

    return (
      <View>
        <Text> Details </Text>
      </View>
    );
  }
}
