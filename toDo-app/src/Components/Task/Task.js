import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Button, Icon } from 'native-base';
import styled from 'styled-components';


const Task = ({ handlePress, item }) => (
  <Touchable onPress={handlePress}>
    <Card>
      <CardContent>
        <CardHeader>
          <HeaderText>{item.titulo}</HeaderText>
        </CardHeader>
        <CardBody>
          <BoldText>Description: </BoldText><Text>{item.descripcion}</Text>
          <Separator />
          <BoldText>Autor: </BoldText><Text>{item.autor.nombre}</Text>
          <Separator />
          <BoldText>Finish Date: </BoldText><Text>{item.fechaEntrega}</Text>
        </CardBody>
        <CardFooter>
          <FooterButton full success>
            <Icon name="checkmark" />
          </FooterButton>
          <FooterButton full danger>
            <Icon name="trash" />
          </FooterButton>
        </CardFooter>
      </CardContent>
    </Card>
  </Touchable>
);

const Separator = styled(View)`
  height: 5px;
`;

const Touchable = styled(TouchableHighlight)`
  width: 96%;
  margin: 0 auto;
  margin: 2%;  
`;

const Card = styled(View)`
  background-color: white;
  height: 220px;
  box-shadow: 5px 5px 5px gray;
  
`;
const CardContent = styled(View)`

  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const CardHeader = styled(View)`
    
`;

const HeaderText = styled(Text)`
  text-align: center;
  font-weight: bold;
  font-size: 15;
`;
const CardBody = styled(View)`
  width: 90%;
  margin: 5% auto;
`;
const CardFooter = styled(View)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const FooterButton = styled(Button)`
  width: 50%;
`;

const BoldText = styled(Text)`
  font-weight: bold;
`;
export default Task;
