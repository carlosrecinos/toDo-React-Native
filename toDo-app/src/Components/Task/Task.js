import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Card, CardItem, Left, Body, Button, Icon } from 'native-base';

const Task = ({ children, handlePress }) => (
  <Card style={{ flex: 0, margin: 0 }}>
    <TouchableHighlight onPress={handlePress} style={{ margin: 0 }}>
      <View>
        <CardItem>
          <Left>
            <Body>
              <Text>NativeBase</Text>
              <Text note>April 15, 2016</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
            Your text here
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{ color: '#87838B' }}>
              <Icon name="logo-github" />
              <Text>1,926 stars</Text>
            </Button>
          </Left>
        </CardItem>
      </View>
    </TouchableHighlight>
  </Card>
);

export default Task;
