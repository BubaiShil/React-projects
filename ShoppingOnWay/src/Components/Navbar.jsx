import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='absolute flex justify-between text-[#121212] w-full p-4 md:p-6  z-50 font-["Porlane"]'>
      <div className='text-4xl md:text-6xl font-light'>
        <h2>ShopyOnWay</h2>
      </div>
      <div className='hidden md:flex gap-5 items-center text-5xl '>
        <h3 onClick={()=>navigate('/')} >Home</h3>
        <h3 onClick={()=>navigate('/contact')} >Contact</h3>
        <h3 onClick={()=>navigate('/about')} >About Us</h3>
        <FaCartShopping onClick={()=>navigate('/cart')} className='text-2xl md:text-4xl'/>
        <GiHamburgerMenu className='text-2xl md:text-4xl'/>
      </div>
    </div>
  )
}

export default Navbar
