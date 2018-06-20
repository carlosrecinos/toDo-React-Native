import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { logOutAction } from '../../Actions/AppActions';

class Profile extends Component {
  logOut = () => {
    AsyncStorage.removeItem('@MySuperDuperStore:token');
    this.props.navigation.navigate('Auth');
  }
  render() {
    return (
      <View>
        <Text> Profile </Text>
        <Button onPress={this.logOut}>
          <Text>Log Out</Text>
        </Button>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  logOut() {
    dispatch(logOutAction());
  },
});
export default connect()(Profile);
