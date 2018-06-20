import { combineReducers } from 'redux';
import { AppReducer } from './AppReducer';
import { TasksReducer } from './TasksReducer';

export const rootReducer = combineReducers({
  AppReducer,
  TasksReducer,
});
