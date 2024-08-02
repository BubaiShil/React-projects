import React from 'react'
import { assets } from "../assets/assets"

const Header = () => {
    return (
        <div className='flex justify-center pt-8 '>
            <img className='bg-cover bg-no-repeat relative' src={assets.header_img} alt="" />
            <div className='absolute flex flex-col justify-end mt-96 font-bold '>
                <h1 className=''>hi welcome!</h1>
                <h3>its my website</h3>
            </div>
        </div>
    )
}

export default Header
