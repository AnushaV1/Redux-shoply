import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "@fortawesome/fontawesome-free/css/all.css";
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Route path="/" component={App} />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
