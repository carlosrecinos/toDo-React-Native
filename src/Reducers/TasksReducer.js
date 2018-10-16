import { GET_TASKS } from '../ActionTypes/TaskTypes';

export const TasksReducer = (state = {
  tasks: {},
}, action) => {
  switch (action.type) {
    case GET_TASKS: {
      return {
        ...state,
        tasks: action.payload,
      };
    }

    default:
      return state;
      break;
  }
};

