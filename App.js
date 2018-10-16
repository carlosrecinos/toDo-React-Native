import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text, AsyncStorage } from 'react-native';
import App from './src/App';
import { store } from './src/store';

class Index extends Component {
  state = { loading: true }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({ loading: false });
  }
  render() {
    const { loading } = this.state;
    if (loading) {
      return <Text>Loading</Text>;
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );

  }
}


export default Index;
