import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom"
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {getFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';

// const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>, 
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
