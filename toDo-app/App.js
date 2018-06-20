import React from 'react';
import { Provider } from 'react-redux';
import App from './src/App';
import { store } from './src/store';

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Index;
