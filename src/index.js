import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App/App';
import './index.css';

let store = createStore(reducers);
console.log(store.getState());

// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
