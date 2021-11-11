import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ContextProvider } from './context/Context';

import './index.css';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);
