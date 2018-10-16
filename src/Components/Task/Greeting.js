import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Gretting = ({ name, quantity }) => (
  <Box>
    <Text>Hello {name} you have {quantity} tasks pending.</Text>
  </Box>
);

const Box = styled(View)`
  background-color: #DDDDDD;
  height: 50px;
  font-size: 20px;
`;

export default Gretting;
