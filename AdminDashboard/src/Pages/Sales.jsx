import React from "react";
import StatsCard from "../Components/CommonItems/StatsCard";
import { UsersIcon } from "lucide-react";
import SalesBar from "../Components/SalesEl/SalesBar";
import SalesAreaChrt from "../Components/SalesEl/SalesAreaChrt";

const Sales = () => {
  return (
    <div className="h-full mx-5 mt-5 bg-black">
      <div className="flex flex-col lg:flex-row gap-5 h-[30%] bg-pink-300">
        <div className="w-full lg:w-[40%] h-full bg-orange-300">
          <StatsCard
            name="Total User"
            icon={<UsersIcon />}
            iconbgcolor="bg-[#FFF4E5]"
            icontxcolor="text-[#ffb74d]"
            classNam="bg-[#33373E] h-[208px]"
            fontsizz="text-[2rem]"
            amount="1,23,286"
          />
        </div>
        <div className="lg:w-[25%] w-full">
          <StatsCard
            name="Total User"
            icon={<UsersIcon />}
            iconbgcolor="bg-[#FFF4E5]"
            icontxcolor="text-[#ffb74d]"
            classNam="bg-[#33373E]"
            fontsizz="text-[2rem]"
            amount="1,23,286"
          />
        </div>
        <div className="lg:w-[35%] w-full">
          <StatsCard
            name="Total User"
            icon={<UsersIcon />}
            iconbgcolor="bg-[#FFF4E5]"
            icontxcolor="text-[#ffb74d]"
            classNam="bg-[#33373E]"
            fontsizz="text-[2rem]"
            amount="1,23,286"
          />
        </div>
      </div>



      <div className="flex h-[70%] mt-4 gap-5 w-full">
        <div className="w-[65%] bg-[#33373E] rounded-3xl pb-0"><SalesAreaChrt/></div>
        <div className="flex flex-col h-full w-[35%] gap-5">
          <StatsCard
            name="Total User"
            icon={<UsersIcon />}
            iconbgcolor="bg-[#FFF4E5]"
            icontxcolor="text-[#ffb74d]"
            classNam="bg-[#33373E]"
            fontsizz="text-[2rem]"
            amount="1,23,286"
            height="h-[225px]"
          />
          <StatsCard
            name="Total User"
            icon={<UsersIcon />}
            iconbgcolor="bg-[#FFF4E5]"
            icontxcolor="text-[#ffb74d]"
            classNam="bg-[#33373E]"
            fontsizz="text-[2rem]"
            amount="1,23,286"
            height="h-[225px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Sales;
