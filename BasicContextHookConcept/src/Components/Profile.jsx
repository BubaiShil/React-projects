import React from 'react'
import useLogin from '../Contexts/Login'

const Profile = () => {

const {user} = useLogin()

  if(!user) return <div>PLEASE LOG IN</div>
  return <div>PROFILE {user.username}</div>
}

export default Profile
