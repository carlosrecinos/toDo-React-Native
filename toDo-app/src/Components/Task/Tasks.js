import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Input, Icon } from 'native-base';

import { fetchTasks } from '../../Actions/TaskAction';
import Task from './Task';
import styled from 'styled-components';

class Tasks extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  onPress = (e) => {
    this.setState({ g: 'h' });
  }
  handleCardPress = () => {

  }
  renderItem = ({ item }) => (
    <Task key={item._id} handlePress={this.onPress} item={item} />
  )
  renderDeleteButton = () => (
    <View />
  )
  render() {
    const { tasks } = this.props;
    return (
      <View>
        <FlatList
          data={_.values(tasks)}
          renderItem={this.renderItem}
          renderHiddenItem={this.renderDeleteButton}
        />
      </View>
    );
  }
}

const Item = styled(View)`
  margin: 10px; auto;
`;

const mapStateToProps = state => ({
  tasks: state.TasksReducer.tasks,
});

const mapDispatchToProps = dispatch => ({
  fetchTasks() {
    dispatch(fetchTasks());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
