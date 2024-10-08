import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import SignUp from './Components/SignUp.jsx'
import LoginIn from './Components/LoginIn.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App/>}>
      <Route  path='/' element={<SignUp/>}/>
      <Route  path='/login' element={<LoginIn/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
