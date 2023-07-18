import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import reducer from './Store/reducer';
import { legacy_createStore } from 'redux';
import Menu from './Menu';

const store = legacy_createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Menu />
  </Provider>
);


reportWebVitals();
