import {React,useState} from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {

  const [borderBar, setBorderBar] = useState("home")

  return (
    <div className='flex py-6 px-0 justify-between items-center '>
      <img src={assets.logo} alt="" className='ps-32'/>
      <ul className='flex space-x-16 font-semibold text-xl cursor-pointer justify-center text-red-500'>
        <li onClick={()=>setBorderBar("home")} className={borderBar==="home"? `border-b-4 border-red-500 ` : ""} >Home</li>
        <li onClick={()=>setBorderBar("menu")} className={borderBar==="menu"?`border-b-4 border-red-500` : ""}>Menu</li>
        <li onClick={()=>setBorderBar("mobile")} className={borderBar==="mobile"?`border-b-4 border-red-500`: ""}>Mobile-app</li>
        <li onClick={()=>setBorderBar("contact")} className={borderBar==="contact" ? `border-b-4 border-red-500` : ""}>Contact us</li>
      </ul>
      <div className='flex space-x-8 pe-36 text-red-500'>
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
