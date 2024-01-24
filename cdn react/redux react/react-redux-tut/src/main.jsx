import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createStore} from "redux";
import { Provider } from 'react-redux';
import rootReducer from './services/Reducers/index'

const store=createStore(rootReducer)
console.log("Store",store);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
