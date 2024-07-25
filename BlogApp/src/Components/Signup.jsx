import {React,useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { login } from '../Store/AuthSlice'
import authService from '../Appwrite/Auth'
import Button from "./Button"
import Logo from './Logo'
import Input from "./Input"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

const SignUpComponent = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()
    

    const SignupAccount = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const user = await authService.getCurrentUser()
                if (user) {
                    dispatch(login(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">

                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}





                <form onSubmit={handleSubmit(SignupAccount)}>
                    <div className='space-y-5'>
                        <Input
                            label="Name: "
                            placeholder="enter your name"
                            {...register("name", {
                                required: true,
                            })}
                        />

                        <Input
                            label="Email:"
                            placeholder="enter your email"
                            type="email"
                            // "email" in regis should be unique name should be same everywhere
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />


                        <Input
                            label="password"
                            placeholder="enter your password"
                            type="password"

                            {...register("password", {
                                required: true,
                            })}
                        />

                        <Button 
                        type='submit'
                        className="w-full"
                        >
                            Sign Up
                        </Button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpComponent
