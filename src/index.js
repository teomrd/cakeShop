import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App/App';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
  ),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
