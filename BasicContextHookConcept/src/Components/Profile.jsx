import React from 'react'
import useLogin from '../Contexts/Login'

const Profile = () => {

    const { user } = useLogin()

    if (!user) return <h2 className="text-2xl font-semibold mb-4">ENTER DETAIL</h2>
    return <p className="text-gray-700">Welcome: {user.username}</p>
}

export default Profile
