import { React, useState } from 'react'
import { assets } from '../assets/assets'

const Login = ({ setLoginPop }) => {

    const [loginState, setLoginState] = useState("Sign-up")


    return (
        <div>
            <form action="">
                <h2>{loginState}</h2>
                <div onClick={() => setLoginPop(false)}>
                    <img src={assets.cross_icon} alt="" />
                </div>

                {loginState === "Sign-up" ?

                    <div>
                        <input type="name" required placeholder='enter your name' />
                        <input type="email" placeholder='enter your email' required id="" />
                        <input type="password" placeholder='enter your password' required />
                        <button>Create Account </button>
                    </div>

                    :

                    <div>
                        <input type="email" placeholder='enter your email' required id="" />
                        <input type="password" placeholder='enter your password' required />
                        <button>Login</button>
                    </div>

                }

                {loginState==="Login" ? 
            <p>Create new Account?<span onClick={()=> setLoginState("Sign-up")} className='cursor-pointer'>Click here</span></p>
            :
            <p>Already have an Account?<span onClick={()=> setLoginState("Login")} className='cursor-pointer'>Login here</span></p>    
            
            }

            </form>
        </div>
    )
}

export default Login
