import React from "react";
import StatsCard from "../Components/CommonItems/StatsCard";
import {
  UsersIcon,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  CreditCard,
} from "lucide-react";
import { GiNetworkBars } from "react-icons/gi";
import SalesBar from "../Components/SalesEl/SalesBar";
import SalesAreaChrt from "../Components/SalesEl/SalesAreaChrt";
import SalesPie from "../Components/SalesEl/SalesPie";

const Sales = () => {
  return (
    <div className="h-full mx-5 mt-5">
      <div className="flex flex-row md:flex-col lg:flex-row gap-5 h-[30%] ">
        <StatsCard
          name="Sales Figures"
          icon={<GiNetworkBars />}
          iconbgcolor="bg-[#02B3A9]"
          icontxcolor="text-[#ECF0F2]"
          classNam="bg-[#33373E] "
          fontsizz="text-[2rem]"
          amount="5,325,235"
          width="w-[30rem]"
          subpart="Revenue Breakdown ↗ +6%"
        />

        <StatsCard
          name="Average order amount"
          icon={<ShoppingCart />}
          iconbgcolor="bg-[#02B3A9]"
          icontxcolor="text-[#ECF0F2]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="₹868.02"
          width="w-[16.3rem]"
          subpart="Per-order average"
        />

        <StatsCard
          name="Total Earnings"
          icon={<DollarSign />}
          iconbgcolor="bg-[#02B3A9]"
          icontxcolor="text-[#ECF0F2]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="₹1,23,286"
          width="w-[25.7rem]"
          subpart="Monthly Revenue"
        />
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-5 w-full">
        <div className="grid grid-cols-1">
          <SalesAreaChrt />
        </div>
        <div className="grid grid-cols-1 gap-5 md:ml-44">
          <StatsCard
            name="Conversion Rate"
            icon={<TrendingUp />}
            iconbgcolor="bg-[#ECF0F2]"
            icontxcolor="text-[#1F1F1F]"
            classNam="bg-[#13727A]"
            fontsizz="text-[2rem]"
            amount="15.6%"
            width="w-[25.7rem]"
          />
          <StatsCard
            name="Sales Growth"
            icon={<CreditCard />}
            iconbgcolor="bg-[#f5c9c9]"
            icontxcolor="text-[#F87171]"
            classNam="bg-[#0DD0C6]"
            fontsizz="text-[2rem]"
            amount="12.3%"
            width="w-[25.7rem]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        <SalesPie />

        <SalesBar />
      </div>
    </div>
  );
};

export default Sales;
