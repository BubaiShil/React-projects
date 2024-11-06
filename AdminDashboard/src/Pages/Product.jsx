import React from "react";
import { FaDollarSign } from "react-icons/fa6";
import StatsCard from "../Components/CommonItems/StatsCard";
import PiechartProd from "../Components/ProductEl/PiechartProd";

const Product = () => {
  return (
    <div className="h-full mx-5 mt-5">
      <div className="grid grid-cols-4 bg-black h-[30%] gap-5 ">
        <StatsCard
          name="Earnings"
          icon={<FaDollarSign />}
          iconbgcolor="bg-[#ECF0F2]"
          icontxcolor="text-[#1F1F1F]"
          classNam="bg-[#13727A]"
          fontsizz="text-[2rem]"
          subpart="Monthly Revenue"
          amount="$1,32,424"
        />
        <StatsCard
          name="Earnings"
          icon={<FaDollarSign />}
          iconbgcolor="bg-[#ECF0F2]"
          icontxcolor="text-[#1F1F1F]"
          classNam="bg-[#13727A]"
          fontsizz="text-[2rem]"
          subpart="Monthly Revenue"
          amount="$1,32,424"
        />
        <StatsCard
          name="Earnings"
          icon={<FaDollarSign />}
          iconbgcolor="bg-[#ECF0F2]"
          icontxcolor="text-[#1F1F1F]"
          classNam="bg-[#13727A]"
          fontsizz="text-[2rem]"
          subpart="Monthly Revenue"
          amount="$1,32,424"
        />
        <StatsCard
          name="Earnings"
          icon={<FaDollarSign />}
          iconbgcolor="bg-[#ECF0F2]"
          icontxcolor="text-[#1F1F1F]"
          classNam="bg-[#13727A]"
          fontsizz="text-[2rem]"
          subpart="Monthly Revenue"
          amount="$1,32,424"
        />
      </div>

      <div className="flex gap-6 mt-8 w-full h-[70%] bg-black">
        <div className="bg-[#33373E] w-[35%] rounded-3xl">
          <div className="flex justify-between items-center">
            <h1>Total Sales</h1>
            <select name="DEC 2024" id="" className="">
              <option value="bgcnc">DEC 2024</option>
              <option value="bgcnc">JAN 2024</option>
              <option value="bgcnc">NOV 2024</option>
            </select>
          </div>
          <PiechartProd />
        </div>
        <div className="bg-[#33373E] w-[65%] rounded-3xl">fbfdb</div>
      </div>
    </div>
  );
};

export default Product;
