import axios from 'axios';
import _ from 'lodash';
import { AsyncStorage } from 'react-native';
import { LOG_IN, SET_CURRENT_USER, LOG_OUT } from '../ActionTypes/AppTypes';

const logInAction = () => ({
  type: LOG_IN,
});

export const setCurrentUserAction = payload => ({
  type: SET_CURRENT_USER,
  payload,
});

export const logOutAction = () => ({
  type: LOG_OUT,
});

export const logIn = (email, password) => (dispatch, getState) => new Promise((resolve, reject) => {
  axios.post('/login', {
    email,
    pass: password,
  })
    .then((response) => {
      if (response.data.error) {
        reject(response.data);
      } else {
        AsyncStorage.setItem('@MySuperDuperStore:token', response.data.token)
          .then(() => {
            dispatch(logInAction());
            dispatch(setCurrentUserAction(response.data.usuario));
            axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      }
    })
    .catch((error) => {
      reject(error);
    });
});


export const signUp = ({ name, email, password }) => dispatch => new Promise((resolve, reject) => {
  axios.post('/registrar', {
    nombre: name,
    email,
    pass: password,
  })
    .then((response) => {
      if (response.data.error) {
        reject(response.data);
      } else {
        resolve(response.data);
      }
    })
    .catch((error) => {
      reject(error);
    });
});
