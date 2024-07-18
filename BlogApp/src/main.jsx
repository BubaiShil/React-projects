import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from '../src/Store/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import Login from "./Pages/Login.jsx"
import AuthLayout from "./Components/AuthLayout.jsx"
import Post from "./Pages/Post.jsx"
import SignUp from "./Pages/SignUp.jsx"
import AllPost from "./Pages/AllPosts.jsx"
import AddPost from "./Pages/AddPost.jsx"
import EditPost from "./Pages/EditPost.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<AuthLayout authentication={false}><Login/></AuthLayout>}/>
    <Route path='/signup' element={<AuthLayout authentication={false}><SignUp/></AuthLayout>}/>
    <Route path='/all-posts' element={<AuthLayout authentication><AllPost/></AuthLayout>}/>
    <Route path='/add-post' element={<AuthLayout authentication><AddPost/></AuthLayout>}/>
    <Route path='/edit-post/:slug' element={<AuthLayout authentication><EditPost/></AuthLayout>}/>
    <Route path='/post/:slug' element={<Post/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
