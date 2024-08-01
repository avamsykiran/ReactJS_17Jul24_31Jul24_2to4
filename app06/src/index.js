import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './index.css';

import { createStore,applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';

import contactsReducer from './state/contactsReducer';

import App from './App';
import reportWebVitals from './reportWebVitals';

const adbStore = createStore(contactsReducer,applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={adbStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
