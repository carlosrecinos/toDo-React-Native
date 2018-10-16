import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import { Icon } from 'native-base';



export default class OptionsBox extends Component {
  state ={
    edit: {
      active: false,
    },
    logOut: {
      active: false,
    },
  }
  handleEditButtonTouch = () => {
    const { edit } = this.state;
    const { openForm } = this.props;
    if (edit.active) {
      this.setState({
        edit: {
          active: false,
        },
      });
      openForm();
    } else {
      this.setState({
        edit: {
          active: true,
        },
      });
    }
  }

  handleLogOutButtonTouch = () => {
    const { logOut } = this.state;
    if (logOut.active) {
      this.setState({
        logOut: {
          active: false,
        },
      });
      this.props.logOut();
    } else {
      this.setState({
        logOut: {
          active: true,
        },
      });
    }
  }


  EditButton = ({ active }) => (
    <Touchable underlayColor="#CCCCCC" >
      <Button active={active} onTouchStart={this.handleEditButtonTouch} onTouchEnd={this.handleEditButtonTouch} >
        <Icon name="create" style={{ fontSize: 100, color: '#CCCCCC' }} />
      </Button>
    </Touchable>
  )

  LogOutButton = ({ active }) => (
    <Touchable underlayColor="#CCCCCC">
      <Button active={active} onTouchStart={this.handleLogOutButtonTouch} onTouchEnd={this.handleLogOutButtonTouch} >
        <Icon name="log-out" style={{ fontSize: 100, color: '#CCCCCC' }} />
      </Button>
    </Touchable>
  )

  render() {
    const { EditButton, LogOutButton } = this;
    const { edit, logOut } = this.state;
    return (
      <Box>
        <EditButton active={edit.active} />
        <LogOutButton active={logOut.active} />
      </Box>
    );
  }
}

const Touchable = styled(TouchableHighlight)`
  width: 50%;
`;

const Box = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Button = styled(View)`
  background-color: ${({ active }) => (active ? '#DDDDDD' : 'transparent')}
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
