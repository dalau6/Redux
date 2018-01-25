import React from 'react'
import ReactDOM from 'react-dom'
import App from './config/App'
import { popular } from 'redux/modules/'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './sharedStyles/styles.css'

const store = createStore(popular)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'))