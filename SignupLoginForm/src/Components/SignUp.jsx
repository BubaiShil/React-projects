import {React,useState} from 'react'
import {useNavigate}  from "react-router-dom"

const SignUp = () => {

    const Navigate = useNavigate()

    const [defaultState, setDefaultState] = useState("Sign Up")
    const [names, setNames] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginPage=()=>{
        Navigate('/login')
    }

    const handleSignup=(e)=>{
        localStorage.setItem("userData",JSON.stringify({names,email,password}))
        Navigate('/login')
    }
    
    
    

    return (
        <div className='bg-gray-400 w-full h-screen flex items-center justify-center'>
            <div className='bg-white p-4 h-4/6 w-2/6 rounded-2xl'>

                <h1 className='pt-5 flex justify-center text-4xl font-bold'>{defaultState}</h1>


                <div className='flex flex-col space-y-5'>
                <label className='pt-3 text-lg font-semibold'>Name</label>
                <input type="text" placeholder='Enter your name' value={names} onChange={(e)=>setNames(e.target.value)} className='border bg-slate-50 p-4 rounded-2xl border-gray-400'/>
                </div>

                <div className='flex flex-col space-y-5'>
                <label className='pt-3 text-lg font-semibold'>Email</label>
                <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='border bg-slate-50 p-4 rounded-2xl border-gray-500'/>
                </div>

                <div className='flex flex-col space-y-5'>
                <label className='pt-3 text-lg font-semibold'>Password</label>
                <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border bg-slate-50 p-4 rounded-2xl border-gray-500'/>
                </div>

                
                
                <div className='mt-24 space-x-16 mx-40'>
                <button onClick={handleSignup} className={defaultState!=="Signup" ? "bg-gray-400 p-4 rounded-2xl font-semibold" : "bg-green-400 p-4 rounded-2xl font-semibold" }>Sign Up</button>
                <button onClick={handleLoginPage} className={defaultState!=="Signup" ?  "bg-green-400 p-4 rounded-2xl font-semibold" : "bg-gray-400 p-4 rounded-2xl font-semibold" }>Log In</button>
                </div>
                
            </div>
        </div>

    )
}

export default SignUp
