import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <>
            <div className='text-white w-full h-[10%]  flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-8 p-2 bg-black cursor-not-allowed rounded-full' src={assets.arrow_left} alt="" />
                    <img className='w-8 p-2 bg-black cursor-not-allowed rounded-full' src={assets.arrow_right} alt="" />
                </div>

                <div className='flex gap-9 px-5 font-semibold items-center transition duration-150 ease-in-out '>
                    <h2 className='cursor-pointer '>Sign Up</h2>
                    <h2 className='cursor-pointer bg-white text-[#121212] p-3 font-bold rounded-full px-9'>Log in</h2>
                </div>

                
            </div>

            
        </>
    )
}

export default Navbar
