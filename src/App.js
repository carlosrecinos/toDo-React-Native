import React from 'react';
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { Icon } from 'native-base';
import axios from 'axios';
import decode from 'jwt-decode';
import TasksStack from './Components/Task/TasksStack';
import HomeStack from './Components/Home/HomeStack';
import AuthtenticationStack from './Components/Authentication/AuthtenticationStack';
import { store } from './store';
import { setCurrentUserAction } from './Actions/AppActions';
import ProfileStack from './Components/Profile.js/ProfileStack';

// axios.defaults.baseURL = 'http://192.168.1.8:3005';
axios.defaults.baseURL = 'https://api-rest-padawan.herokuapp.com';

const AppStack = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
    },
  },
  Tasks: {
    screen: TasksStack,
    navigationOptions: {
      tabBarLabel: 'Tasks',
      tabBarIcon: ({ tintColor }) => <Icon name="calendar" size={35} color={tintColor} />,
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-person-outline" size={35} color={tintColor} />,
    },
  },
});

let initialRouteName = 'Auth';

async function getInitialRoute() {
  let isValid = false;
  try {
    const token = await AsyncStorage.getItem('@MySuperDuperStore:token');
    if (token) {
      axios.post('/verificarToken', { token })
        .then((responseVerifyToken) => {
          if (responseVerifyToken.data.valido) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            const decoded = decode(token);
            const user = {
              email: decoded.email,
              nombre: decoded.nombre,
            };
            store.dispatch(setCurrentUserAction(user));
            isValid = true;
          } else {
            AsyncStorage.removeItem('@MySuperDuperStore:token');
          }
        })
        .catch((error) => {
          console.log('Error', error);
        });
    } else {
    }
  } catch (error) {
    console.log(error);
  }
  return isValid;
}

const isValid = getInitialRoute();
if (isValid) {
  initialRouteName = 'Auth';
}
export default createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthtenticationStack,
  },
  {
    initialRouteName,
  },
);
