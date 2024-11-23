import React from "react";
import StatsCard from "../Components/CommonItems/StatsCard";
import { UsersIcon } from "lucide-react";
import SalesBar from "../Components/SalesEl/SalesBar";
import SalesAreaChrt from "../Components/SalesEl/SalesAreaChrt";
import SalesPie from "../Components/SalesEl/SalesPie";

const Sales = () => {
  return (
    <div className="h-full mx-5 mt-5">
      <div className="flex flex-row md:flex-col lg:flex-row gap-5 h-[30%] ">
        <StatsCard
          name="Total User"
          icon={<UsersIcon />}
          iconbgcolor="bg-[#FFF4E5]"
          icontxcolor="text-[#ffb74d]"
          classNam="bg-[#33373E] "
          fontsizz="text-[2rem]"
          amount="1,23,286"
          width="w-[30rem]"
        />

        <StatsCard
          name="Total User"
          icon={<UsersIcon />}
          iconbgcolor="bg-[#FFF4E5]"
          icontxcolor="text-[#ffb74d]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="1,23,286"
          width="w-[16.3rem]"
        />

        <StatsCard
          name="Total User"
          icon={<UsersIcon />}
          iconbgcolor="bg-[#FFF4E5]"
          icontxcolor="text-[#ffb74d]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="1,23,286"
          width="w-[25.7rem]"
        />
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 h-[70%] mt-6 gap-5 w-full">
        <div className="grid grid-cols-1">
          <SalesAreaChrt />
        </div>
        <div className="grid grid-cols-1 gap-5 md:ml-44">
          <StatsCard
            name="Total User"
            icon={<UsersIcon />}
            iconbgcolor="bg-[#FFF4E5]"
            icontxcolor="text-[#ffb74d]"
            classNam="bg-[#33373E]"
            fontsizz="text-[2rem]"
            amount="1,23,286"
            width="w-[25.7rem]"
          />
          <StatsCard
            name="Total User"
            icon={<UsersIcon />}
            iconbgcolor="bg-[#FFF4E5]"
            icontxcolor="text-[#ffb74d]"
            classNam="bg-[#33373E]"
            fontsizz="text-[2rem]"
            amount="1,23,286"
            width="w-[25.7rem]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          <SalesPie/>
        
          <SalesBar />
      </div>

    </div>
  );
};

export default Sales;
