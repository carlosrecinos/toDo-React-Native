import React, { Component } from 'react';
import { Text, View, Image, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
      <Container>
        <Title>Todo App</Title>
        <Logo source={{ uri: 'https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png' }} />
        <Text>You have # tasks pending, do it?</Text>
      </Container>
    );
  }
}


const Container = styled(View)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #309BFF;
`;
const Title = styled(Text)`
  font-size: 70px;
`;
const Logo = styled(Image)`
  width: 50;
  height: 50;
`;
export default Home;
