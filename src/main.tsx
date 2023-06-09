import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import store from '../app/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('rootOLD') as HTMLElement).render(
  <React.StrictMode>
     <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
)
