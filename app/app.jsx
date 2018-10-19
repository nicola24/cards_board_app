import React from 'react';
import { render } from 'react-dom';

import Dashboard from './components/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';

const MOUNT_NODE = document.getElementById('app');

render(<Dashboard />, MOUNT_NODE);
