import { LOG_IN, SET_CURRENT_USER } from '../ActionTypes/AppTypes';

export const AppReducer = (state = {
  logged: false,
  currentUser: {},
}, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        logged: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.paylaod,
      };

    default:
      return state;
  }
};

