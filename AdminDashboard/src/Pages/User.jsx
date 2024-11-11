import React from "react";
import StatsCard from "../Components/CommonItems/StatsCard";
import { UserCheck, UsersIcon, UserPlus, UserX } from "lucide-react";
import UserTable from "../Components/UserEl/UserTable";
import UserGrowthLineCh from "../Components/UserEl/UserGrowthLineCh";
import UserCOLpieCh from "../Components/UserEl/UserCOLpieCh";

const User = () => {
  return (
    <div className="h-full mx-5 mt-5">
      <div className="grid grid-cols-4 h-[25%] gap-5 ">
        <StatsCard
          name="Total User"
          icon={<UsersIcon />}
          iconbgcolor="bg-[#FFF4E5]"
          icontxcolor="text-[#ffb74d]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="1,23,286"
        />
        <StatsCard
          name="Today's Sign-ups"
          icon={<UserPlus />}
          iconbgcolor="bg-[#EBFAF2]"
          icontxcolor="text-[#4caf50]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="326"
        />
        <StatsCard
          name="Current Users"
          icon={<UserCheck />}
          iconbgcolor="bg-[#E5FAFB]"
          icontxcolor="text-[#2196f3]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="82,561"
        />
        <StatsCard
          name="Attrition Rate"
          icon={<UserX />}
          iconbgcolor="bg-[#FDF3F5]"
          icontxcolor="text-[#f44336]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="3.6%"
        />
      </div>

      <div className="bg-[#33373E] pb-6 my-12 rounded-3xl">
        <UserTable />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[60%] mt-6">
            <div className="bg-[#33373E] rounded-3xl"><UserGrowthLineCh/></div>
            <div className="bg-[#33373E] rounded-3xl"><UserCOLpieCh/></div>
      </div>
    </div>
  );
};

export default User;
