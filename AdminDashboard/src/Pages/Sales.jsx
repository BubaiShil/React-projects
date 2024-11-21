import React from "react";
import StatsCard from "../Components/CommonItems/StatsCard";
import { UsersIcon } from "lucide-react";

const Sales = () => {
  return (
    <div className="h-full mx-5 mt-5 bg-slate-300">
      <div className="flex h-[30%] gap-5 bg-black">
        <div className="w-[40%]">
          <StatsCard
            name="Total User"
            icon={<UsersIcon />}
            iconbgcolor="bg-[#FFF4E5]"
            icontxcolor="text-[#ffb74d]"
            classNam="bg-[#33373E] h-[0%]"
            fontsizz="text-[2rem]"
            amount="1,23,286"
          />
        </div>
        <div className="w-[25%]">
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
      <div className="w-[35%]">
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
    </div>
  );
};

export default Sales;
