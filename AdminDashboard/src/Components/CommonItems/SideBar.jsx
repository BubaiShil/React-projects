import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { SIDEBAR_ITEMS } from "../../Data/DashboardDta";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isActive, setIsActive] = useState("");
  //console.log(isSidebarOpen);

  return (
    <div
      className={`bg-[#282C34] border-r border-x-gray-500 transition-all duration-500 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "lg:w-72" : "lg:w-20 " 
      } md:w-20 w-20`}
    >
      <div className="flex p-9 pl-6 pr-4 pb-0 text-3xl font-bold items-center justify-between">
        {isSidebarOpen && (
          <span className=" text-[#C9CACC] font-['DM Sans'] hidden md:hidden lg:block">Dashhy</span>
        )}
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <MenuIcon size={35} className="text-[#00CEC3]" />
        </button>
      </div>
      <div className="mt-8">
        {SIDEBAR_ITEMS.map((e) => (
          <Link key={e.href} to={e.href}>
            <div
              className={`flex p-5 gap-6 mx-2 my-3 rounded-2xl ${
                isActive === e.href ? "bg-[#98a3a4]" : "hover:bg-[#00CEC3]"
              }`}
              onClick={() => setIsActive(e.href)}
            >
              {/* tobedone */}
              <span className={`${!isActive===e.href ? "hover:text-white":"text-black"}`}>{e.icon}</span> 
              {isSidebarOpen && (
                <h2 className="text-[#E6E5E8] font-medium hidden lg:block">{e.name}</h2>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
