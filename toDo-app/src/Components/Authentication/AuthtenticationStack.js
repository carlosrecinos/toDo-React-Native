import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Login from './Login';

export default createStackNavigator(
  {
    Login,
  },
  {
    headerMode: 'none',
  },
);
