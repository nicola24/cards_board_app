import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Dashboard from './containers/Dashboard';
import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

const MOUNT_NODE = document.getElementById('app');

render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  MOUNT_NODE,
);
