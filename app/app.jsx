import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './containers/Dashboard';

const MOUNT_NODE = document.getElementById('app');

render(
  <Provider>
    <Dashboard />
  </Provider>,
  MOUNT_NODE,
);
