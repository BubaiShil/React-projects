import { React, useState } from 'react'
import { assets } from '../assets/assets'

const Login = ({ setLoginPop }) => {

    const [loginState, setLoginState] = useState("Sign-up")

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{loginState}</h2>
                    <div onClick={() => setLoginPop(false)} className="cursor-pointer">
                        <img src={assets.cross_icon} alt="Close" className="w-6 h-6" />
                    </div>
                </div>
                <form>
                    {loginState === "Sign-up" ?
                        <div>
                            <input type="text" required placeholder="Enter your name" className="w-full p-2 mb-4 border border-gray-300 rounded" />
                            <input type="email" placeholder="Enter your email" required className="w-full p-2 mb-4 border border-gray-300 rounded" />
                            <input type="password" placeholder="Enter your password" required className="w-full p-2 mb-6 border border-gray-300 rounded" />
                            <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">Create Account</button>
                        </div>
                        :
                        <div>
                            <input type="email" placeholder="Enter your email" required className="w-full p-2 mb-4 border border-gray-300 rounded" />
                            <input type="password" placeholder="Enter your password" required className="w-full p-2 mb-6 border border-gray-300 rounded" />
                            <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">Login</button>
                        </div>
                    }
                    {loginState === "Login" ? 
                        <p className="mt-4 text-sm">Create new Account? 
                            <span onClick={() => setLoginState("Sign-up")} className="text-blue-500 cursor-pointer ml-1">Click here</span>
                        </p>
                        :
                        <p className="mt-4 text-sm">Already have an Account? 
                            <span onClick={() => setLoginState("Login")} className="text-blue-500 cursor-pointer ml-1">Login here</span>
                        </p>    
                    }
                </form>
            </div>
        </div>
    )
}

export default Login
