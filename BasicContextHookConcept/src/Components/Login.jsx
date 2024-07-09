import React, { useState } from 'react'
import useLogin from '../Contexts/Login'
//import { ContextPovider } from '../Contexts/Login'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const { setUser } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (

        <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="border rounded p-2 mb-4"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="border rounded p-2 mb-4"
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </div>

    )
}

export default Login
