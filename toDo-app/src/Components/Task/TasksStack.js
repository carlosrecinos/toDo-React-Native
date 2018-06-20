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
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
}, {
  initialRouteName: 'Tasks',
});
