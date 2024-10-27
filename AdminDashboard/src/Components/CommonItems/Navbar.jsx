import React from "react";
import { Search, BellDot} from "lucide-react";
//import prof from '../../../src/Data/prof.jpg'
import { IoChatboxOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="text-white">
      <div className="flex mt-2 text-2xl font-semibold items-center justify-end gap-7 p-4">
        <Search />
        <BellDot />
        {/* <img src="prof.jpg" alt="" /> */}
        <IoChatboxOutline />
      </div>
    </div>
  );
};

export default Navbar;
