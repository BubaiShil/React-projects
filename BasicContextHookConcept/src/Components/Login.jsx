import React, { useState } from 'react'
import useLogin from '../Contexts/Login'
//import { ContextPovider } from '../Contexts/Login'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const {setUser} = useLogin()

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }

    return (

        <div>
            <h2>login</h2>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>

    )
}

export default Login
