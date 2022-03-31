import React from "react";
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter.js';
import { Provider } from "react-redux";
import Store from "./Store/Store.js";
import '../styles/base.scss';

ReactDOM.
  render(
    <Provider store={Store}>
      <AppRouter />
    </Provider>
  , document.querySelector('#app'));

