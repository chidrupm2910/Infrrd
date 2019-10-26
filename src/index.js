import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import employeeDetailsReducer from './store/reducer/employeeDetailsReducer';
import filterReducer from './store/reducer/filterReducer';
import history from './routes/history';

const rootReducer = combineReducers({
    employeeDetails: employeeDetailsReducer,
    searchFilter: filterReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
// for debugging purpose
window.store = store;
ReactDOM.render(
<Provider store={store}>
    <Router history={history}>
<App /></Router></Provider>,
 document.getElementById('root'));

serviceWorker.unregister();
