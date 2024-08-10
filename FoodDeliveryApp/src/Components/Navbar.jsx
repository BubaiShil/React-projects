import {React,useState} from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setLoginPop}) => {

  const [borderBar, setBorderBar] = useState("home")

  return (
    <div className="flex flex-wrap py-6 px-4 justify-between items-center">
      <img src={assets.logo} alt="Logo" className="ps-6 lg:ml-28 w-24 h-auto md:w-48 lg:w-60" />
      <div className="flex-1 flex justify-center">
        <ul className="hidden md:flex space-x-8 lg:space-x-16 font-semibold text-base lg:text-base cursor-pointer text-red-500">
          <Link to="/"><li onClick={() => setBorderBar("home")} className={borderBar === "home" ? `border-b-4 border-red-500` : ""}>Home</li></Link>
          <li onClick={() => setBorderBar("menu")} className={borderBar === "menu" ? `border-b-4 border-red-500` : ""}>Menu</li>
          <li onClick={() => setBorderBar("mobile")} className={borderBar === "mobile" ? `border-b-4 border-red-500` : ""}>Mobile-app</li>
          <li onClick={() => setBorderBar("contact")} className={borderBar === "contact" ? `border-b-4 border-red-500` : ""}>Contact us</li>
        </ul>
      </div>

      <div className="flex space-x-6 md:space-x-8 pe-4 md:pe-36 text-red-500 items-center">
        <img src={assets.search_icon} alt="Search" className="w-6 h-6 md:w-8 md:h-8" />
        <div className="relative">
          <Link to="/cart"><img src={assets.basket_icon} alt="Cart" className="w-6 h-6 md:w-8 md:h-8" /></Link>
          <div className="absolute -top-2 -right-2 bg-red-500 rounded-full w-2 h-2"></div>
        </div>
        <button className="hidden md:block text-lg font-semibold" onClick={() => setLoginPop(true)}>Sign In</button>
      </div>
      
      <div className="w-full md:hidden mt-4">
        <ul className="flex justify-around font-semibold text-lg cursor-pointer text-red-500">
          <Link to="/"><li onClick={() => setBorderBar("home")} className={borderBar === "home" ? `border-b-4 border-red-500` : ""}>Home</li></Link>
          <li onClick={() => setBorderBar("menu")} className={borderBar === "menu" ? `border-b-4 border-red-500` : ""}>Menu</li>
          <li onClick={() => setBorderBar("mobile")} className={borderBar === "mobile" ? `border-b-4 border-red-500` : ""}>Mobile-app</li>
          <li onClick={() => setBorderBar("contact")} className={borderBar === "contact" ? `border-b-4 border-red-500` : ""}>Contact us</li>
          <li className="md:hidden" onClick={() => setLoginPop(true)}>Sign In</li>
        </ul>
      </div>
    </div>
  );
  
}

export default Navbar
