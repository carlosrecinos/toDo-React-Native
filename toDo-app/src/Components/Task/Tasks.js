import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { SwipeListView } from 'react-native-swipe-list-view';
import _ from 'lodash';
import { fetchTasks } from '../../Actions/TaskAction';
import Task from './Task';

class Tasks extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }
  handleCardPress = (e) => {
    console.log(e);
  }
  onPress = (e) => {
    this.setState({ g: 'h' });
  }
  renderItem = ({ item }) => {
    console.log(item);
    return (
      <Task handlePress={this.onPress} />
    );
  }
  renderDeleteButton = () => {
    console.log('object');
    return (
      <View />
    );
  }
  render() {
    const { tasks } = this.props;
    return (
      <View>
        <SwipeListView
          useFlatList
          data={_.values(tasks)}
          renderItem={this.renderItem}
          renderHiddenItem={this.renderDeleteButton}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.TasksReducer.tasks,
});

const mapDispatchToProps = dispatch => ({
  fetchTasks() {
    dispatch(fetchTasks());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
