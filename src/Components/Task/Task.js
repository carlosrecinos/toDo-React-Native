import React from 'react';
import { Text as ReactText, View, TouchableHighlight } from 'react-native';
import styled from 'styled-components';

const Task = ({ handlePress, item }) => (
  <Touchable onPress={handlePress}>
    <Card>
      <CardContent>
        <CardHeader>
          <HeaderText>{item.titulo}</HeaderText>
        </CardHeader>
        <CardBody>
          <Text>{item.descripcion}</Text>
          <Separator />
          <FinishDate transform={[{ translateY: -50 }]}>{item.parsedDate}</FinishDate>
        </CardBody>
      </CardContent>
    </Card>
  </Touchable>
);

const Separator = styled(View)`
  height: 5px;
`;

const Touchable = styled(TouchableHighlight)`
  width: 100%;
`;
const FinishDate = styled(ReactText)`
  position: absolute;
  right: 10;
  top: 50%;
`;

const Text = styled(ReactText)`
  font-size: 12px;
  margin-top: 10px
  color: #555555;
`;
const Card = styled(View)`
  background-color: white;
  height: 75px;
  border-bottom-width: 1px;
  border-bottom-color: #DDDDDD;
`;
const CardContent = styled(View)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const CardHeader = styled(View)`
    
`;

const HeaderText = styled(ReactText)`
  text-align: center;
  font-weight: bold;
  font-size: 15;
`;
const CardBody = styled(View)`
  width: 95%;
  margin: 0 auto;
  position: relative;
`;

export default Task;
