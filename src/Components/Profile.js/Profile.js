import React, { Component } from 'react';
import { Text, View, AsyncStorage, Image, Keyboard, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logOutAction } from '../../Actions/AppActions';
import user from '../../assets/user.png';
import OptionsBox from './OptionsBox';
import EditForm from './EditForm';

class Profile extends Component {
  state = {
    currentView: 'options', // edit || options
  }
  openForm = () => {
    this.setState({
      currentView: 'edit',
    });
  }
  closeForm = () => {
    this.setState({
      currentView: 'options',
    });
  }

  logOut = () => {
    AsyncStorage.removeItem('@MySuperDuperStore:token');
    this.props.navigation.navigate('Auth');
  }

  render() {
    const { currentView } = this.state;
    const { nombre } = this.props.user;
    return (
      <Container onPress={() => { Keyboard.dismiss(); }}>
        <UserInfo>
          <ProfilePhoto source={user} />
          <Name>{nombre}</Name>
        </UserInfo>
        {
          currentView === 'options'
          ?
            <OptionsBox openForm={this.openForm} logOut={this.logOut} />
          :
            <EditForm user={this.props.user} closeForm={this.closeForm} />
        }
      </Container>
    );
  }
}

const UserInfo = styled(View)`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Name = styled(Text)`
  font-weight: 500;
  text-align: center;
  font-size: 20;
  color: #888888;
  margin: 10px 0px;
`;

const Container = styled(ScrollView)`
  background-color: #EEEEEE;
  height: 100%;
`;

const ProfilePhoto = styled(Image)`
  height: 150px;
  width: 150px;
  opacity: 0.2;
`;

const mapStateToProps = store => ({
  user: store.AppReducer.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logOut() {
    dispatch(logOutAction());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
