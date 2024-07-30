import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex py-6 px-0 justify-between items-center border-b-4 border-solid border-b-gray-300'>
      <img src={assets.logo} alt="" className='ps-32'/>
      <ul className='flex space-x-16 font-semibold text-xl cursor-pointer justify-center text-red-500'>
        <li className='hover:border-b-4 border-red-500'>Home</li>
        <li className='hover:border-b-4 border-red-500'>Menu</li>
        <li className='hover:border-b-4 border-red-500'>mobile-app</li>
        <li className='hover:border-b-4 border-red-500'>contact us</li>
      </ul>
      <div className='flex space-x-8 pe-12 text-red-500'>
        <img src={assets.search_icon} alt="" />
        <div>
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
        </div>
        <button className='text-lg font-semibold'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
