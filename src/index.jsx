// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import {Provider} from 'react-redux'
import store from './store'

render((
  <Provider store={store}>
  <App />
  </Provider>
  ), document.getElementById('react-root'))
