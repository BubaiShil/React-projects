import React from 'react'
import {useDispatch} from "react-redux"
import authService from '../../Appwrite/Auth'
import { logout } from '../../Store/AuthSlice'

const LogoutBtn = () => {

    const dispatch = useDispatch()

    const LogoutHandler = () =>{
        authService.LogOut()
        .then(()=>{
            dispatch(logout)
        })
    }


  return (
    <div>
      <button className='inline-block px-6 py-2 duration-200 
      hover:bg-blue-100 rounded-full' onClick={LogoutHandler}>logout</button>
    </div>
  )
}

export default LogoutBtn
