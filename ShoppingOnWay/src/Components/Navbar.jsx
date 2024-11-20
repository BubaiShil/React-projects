import React from "react";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const ham = () => {
    setToggle(!toggle);
  };

  return (
    <div className='absolute flex justify-between  text-[#121212] w-full p-4 md:p-6  z-50 font-["Porlane"]'>
      <div className="text-5xl md:text-6xl font-light">
        <h2>ShopyOnWay</h2>
      </div>

      <div className=" flex gap-5 items-center text-5xl relative">
        <div className={`${toggle ? "block" : "hidden"} absolute  top-full  right-0 rounded-2xl bg-white md:bg-inherit md:w-full w-[22.4rem]  p-[3rem] md:p-0 md:static md:flex gap-5`}>
          <h3 className="" onClick={() => navigate("/")}>
            Home
          </h3>
          <h3 className="">
            Contact
          </h3>
          <h3 className="">
            About Us
          </h3>
        </div>

        <FaCartShopping
          onClick={() => navigate("/cart")}
          className="text-3xl md:text-5xl block"
        />
        {!toggle ? <GiHamburgerMenu onClick={ham} className="text-3xl md:text-5xl" /> : <GrClose onClick={ham} className='text-3xl md:text-4xl'/>}
        
      </div>
    </div>
  );
};

export default Navbar;
