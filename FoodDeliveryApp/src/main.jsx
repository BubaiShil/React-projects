import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import {ContextProvider} from "./Context/Store.jsx"
// import contextValue from "./Context/Store.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextProvider >
      <App />
    </ContextProvider>
  </BrowserRouter>,
)
