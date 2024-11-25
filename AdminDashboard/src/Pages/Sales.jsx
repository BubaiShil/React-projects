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
    <div className="h-full mx-5 mt-5 ">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-5 lg:h-[30%]  w-full">
        <StatsCard
          name="Sales Figures"
          icon={<GiNetworkBars />}
          iconbgcolor="bg-[#02B3A9]"
          icontxcolor="text-[#ECF0F2]"
          classNam="bg-[#33373E] pb-8 lg:pb-0 "
          fontsizz="text-[2rem]"
          amount="5,325,235"
          subpart="Revenue Breakdown ↗ +6%"
        />

        {/* width="lg:w-[35vw]" */}
        <StatsCard
          name="Average order amount"
          icon={<ShoppingCart />}
          iconbgcolor="bg-[#02B3A9]"
          icontxcolor="text-[#ECF0F2]"
          classNam="bg-[#33373E] pb-8 lg:pb-0 "
          fontsizz="text-[2rem]"
          amount="₹868.02"
          subpart="Per-order average"
        />
        {/* width="lg:w-[22vw]" */}
        <StatsCard
          name="Total Earnings"
          icon={<DollarSign />}
          iconbgcolor="bg-[#02B3A9]"
          icontxcolor="text-[#ECF0F2]"
          classNam="bg-[#33373E] pb-8 lg:pb-0 "
          fontsizz="text-[2rem]"
          amount="₹1,23,286"
          subpart="Monthly Revenue"
        />
        {/* width="lg:w-[25vw]" */}
      </div>

      <div className="flex flex-col lg:flex-row mt-6 gap-5 w-full">
        <SalesAreaChrt />

        <div className="flex flex-col lg:gap-24  gap-6 mt-5 md:mt-0 lg:w-[34%]">
          <StatsCard
            name="Conversion Rate"
            icon={<TrendingUp />}
            iconbgcolor="bg-[#ECF0F2]"
            icontxcolor="text-[#1F1F1F]"
            classNam="bg-[#13727A] pb-8 lg:pb-5 "
            fontsizz="text-[2rem]"
            amount="15.6%"
            height="md:h-[140%]"
          />
          <StatsCard
            name="Sales Growth"
            icon={<CreditCard />}
            iconbgcolor="bg-[#f5c9c9]"
            icontxcolor="text-[#F87171]"
            classNam="bg-[#0DD0C6] pb-8 lg:pb-4 "
            fontsizz="text-[2rem]"
            amount="12.3%"
            height="md:h-[140%]"
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

// width="w-full lg:w-[25.7rem] "
