import React from "react";
import StatsCard from "../Components/CommonItems/StatsCard";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import UserTable from "../Components/UserEl/UserTable";

const User = () => {
  return (
    <div className="h-full mx-5 mt-5">
      <div className="grid grid-cols-4 h-[30%] gap-5 ">
        <StatsCard
          name="Top Selling"
          icon={<UserCheck />}
          iconbgcolor="bg-[#E5FAFB]"
          icontxcolor="text-[#13727A]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="56"
          subpart="+38%"
        />
        <StatsCard
          name="Top Selling"
          icon={<UserPlus />}
          iconbgcolor="bg-[#E5FAFB]"
          icontxcolor="text-[#13727A]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="56"
          subpart="+38%"
        />
        <StatsCard
          name="Top Selling"
          icon={<UserCheck />}
          iconbgcolor="bg-[#E5FAFB]"
          icontxcolor="text-[#13727A]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="56"
          subpart="+38%"
        />
        <StatsCard
          name="Top Selling"
          icon={<UserCheck />}
          iconbgcolor="bg-[#E5FAFB]"
          icontxcolor="text-[#13727A]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="56"
          subpart="+38%"
        />
      </div>

      <div className="bg-[#33373E] h-[70%] mt-6 rounded-3xl">
        <UserTable />
      </div>
    </div>
  );
};

export default User;
