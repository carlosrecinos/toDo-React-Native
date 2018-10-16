import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Icon } from 'native-base';
import format from 'date-fns/format';
import { fetchTasks } from '../../Actions/TaskAction';
import Task from './Task';
import Greeting from './Greeting';

class Tasks extends Component {
  componentDidMount() {
    const { fetchTasks } = this.props;
    fetchTasks();
  }
  onPress = (e) => {
    this.setState({ g: 'h' });
  }
  handleCardPress = () => {

  }
  openDetail = (task) => {
    const { navigation } = this.props;
    navigation.push('TaskDetail');
  }
  renderItem = ({ item }) => (
    <Task key={item._id} handlePress={this.openDetail} item={item} />
  )
  renderDeleteButton = ({ item }) => (
    <DeleteButton key={item._id}>
      <Icon
        name="close"
        style={{
 fontSize: 70, color: '#813A3A', position: 'absolute', right: 30,
}}
      />
    </DeleteButton>
  )

  render() {
    const { tasks, user } = this.props;
    const withDateTasks = _.map(tasks, task => ({
      ...task,
      parsedDate: format(new Date(task.fechaEntrega), 'MM-DD-YY'),
    }));
    return (
      <React.Fragment>
        {/* <Greeting name={user.nombre} quantity={_.size(withDateTasks)} /> */}
        <SwipeListView
          useFlatList
          disableRightSwipe
          data={withDateTasks}
          renderItem={this.renderItem}
          renderHiddenItem={this.renderDeleteButton}
          rightOpenValue={-100}
        />
      </React.Fragment>
    );
  }
}

const DeleteButton = styled(View)`
  height: 100%;
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  background-color: #CE5E5E;
`;

const mapStateToProps = state => ({
  tasks: state.TasksReducer.tasks,
  user: state.AppReducer.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchTasks() {
    dispatch(fetchTasks());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
