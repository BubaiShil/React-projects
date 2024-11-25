import React from "react";
import StatsCard from "../Components/CommonItems/StatsCard";
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import OrderLIneChrt from "../Components/OrderEl/OrderLIneChrt";
import OrderPie from "../Components/OrderEl/OrderPie";
import OrderTble from "../Components/OrderEl/OrderTble";

const Orders = () => {
  return (
    <div className="h-full mx-5 mt-5">
      <div className="grid grid-cols-1 h-[30%] md:grid-cols-4 gap-5">
        <StatsCard
          name="Orders Count"
          icon={<ShoppingBag />}
          iconbgcolor="bg-[#E5FAFB]"
          icontxcolor="text-[#13727A]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="2,056"
          subpart="+38%"
        />
        <StatsCard
          name="Orders Pending"
          icon={<Clock />}
          iconbgcolor="bg-[#FDF3F5]"
          icontxcolor="text-[#F87171]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="42"
        />
        <StatsCard
          name="Completed Orders"
          icon={<CheckCircle />}
          iconbgcolor="bg-[#FFF4E5]"
          icontxcolor="text-[#FEC90F]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="1,538"
        />
        <StatsCard
          name="Total Revenue"
          icon={<DollarSign />}
          iconbgcolor="bg-[#EBFAF2]"
          icontxcolor="text-[#00C292]"
          classNam="bg-[#33373E]"
          fontsizz="text-[2rem]"
          amount="₹5,32,424"
          subpart="+58%"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
        <OrderLIneChrt />

        <OrderPie />
      </div>

      <div className="bg-[#33373E] mt-8 rounded-3xl h-full">
        <OrderTble />
      </div>
    </div>
  );
};

export default Orders;
