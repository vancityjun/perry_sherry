import 'react-app-polyfill/ie11'
import 'raf/polyfill'
import 'core-js/features/array/find'
import 'core-js/features/array/includes'
import 'core-js/features/number/is-nan'
import 'core-js/es/map'
import 'core-js/es/set'
import 'core-js/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'

// const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
