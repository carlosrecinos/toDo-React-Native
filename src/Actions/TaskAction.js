import _ from 'lodash';
import axios from 'axios';
import { GET_TASKS } from '../ActionTypes/TaskTypes';

const getTasksAction = payload => ({
  type: GET_TASKS,
  payload,
});

export const fetchTasks = () => (dispatch, getState) => {
  const size = _.size(getState().tasks);
  if (size === 0) {
    axios.get('/tareas')
      .then((response) => {
        dispatch(getTasksAction(response.data));
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }
};

