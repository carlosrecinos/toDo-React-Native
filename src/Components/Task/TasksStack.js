import { createStackNavigator } from 'react-navigation';
import Tasks from './Tasks';
import TaskDetail from './TaskDetail';

export default createStackNavigator({
  Tasks: {
    screen: Tasks,
    navigationOptions: {
      title: 'Tasks',
    },
  },
  TaskDetail: {
    screen: TaskDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.toString()}`,
    }),
  },
}, {
  initialRouteName: 'Tasks',
});
