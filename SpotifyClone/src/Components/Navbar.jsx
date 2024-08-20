import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

    //const [notAllowed, setNotAllowed] = useState(1)
    const navigate = useNavigate()

    return (
        <>
            <div className='text-white w-full h-[10%]  flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img onClick={()=>navigate(-1)} className='w-8 p-2 bg-black rounded-full '  src={assets.arrow_left} alt="" />
                    <img onClick={()=>navigate(1)} className='w-8 p-2 bg-black rounded-full' src={assets.arrow_right} alt="" />
                </div>

                <div className='hidden md:flex gap-9 px-5 font-semibold items-center transition duration-150 ease-in-out '>
                    <h2 className='cursor-pointer'>Sign Up</h2>
                    <h2 className='cursor-pointer bg-white text-[#121212] p-3 font-bold rounded-full px-9'>Log in</h2>
                </div>

                
            </div>

            
        </>
    )
}

export default Navbar
