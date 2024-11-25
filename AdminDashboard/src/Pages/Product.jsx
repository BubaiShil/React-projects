import React from "react";
import { FaDollarSign } from "react-icons/fa6";
import { AlertTriangle, Package, TrendingUp } from "lucide-react";
import StatsCard from "../Components/CommonItems/StatsCard";
import PiechartProd from "../Components/ProductEl/PiechartProd";
import ProductTablw from "../Components/ProductEl/ProductTablw";

const Product = () => {
  return (
    <div className="h-full mx-5 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-4 md:h-[30%] gap-5">
        <StatsCard
          name="Top Selling"
          icon={<TrendingUp />}
          iconbgcolor="bg-[#E5FAFB]"
          icontxcolor="text-[#13727A]"
          classNam="bg-[#33373E] pb-8 md:pb-0"
          fontsizz="text-[2rem]"
          amount='56'
          subpart="+38%"
        />
        <StatsCard
          name="Total Products"
          icon={<Package />}
          iconbgcolor="bg-[#FFF4E5]"
          icontxcolor="text-[#FEC90F]"
          classNam="bg-[#33373E] pb-8 md:pb-0"
          fontsizz="text-[2rem]"
          amount="32,424"
          subpart="+23%"
        />
        <StatsCard
          name="Low Stock"
          icon={<AlertTriangle />}
          iconbgcolor="bg-[#FDF3F5]"
          icontxcolor="text-[#F87171]"
          classNam="bg-[#33373E] pb-8 md:pb-0"
          fontsizz="text-[2rem]"
          amount="38"
        />
        <StatsCard
          name="Total Revenue"
          icon={<FaDollarSign />}
          iconbgcolor="bg-[#EBFAF2]"
          icontxcolor="text-[#00C292]"
          classNam="bg-[#33373E] pb-8 md:pb-0"
          fontsizz="text-[2rem]"
          amount="₹5,32,424"
          subpart="+58%"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-8 w-full h-[70%]">
        <div className="bg-[#33373E] md:w-[35%] rounded-3xl">
          <div className="flex justify-between items-center p-6">
            <h1 className="text-2xl font-medium text-white tracking-tighter">Total Sales</h1>
            <select name="DEC 2024" id="" className="p-3 focus:outline-none rounded-xl bg-[#767E89] text-[#E6E5E8] border-none font-medium ">
              <option value="" className="font-semibold hover:bg-[#406A6D]">JAN 2024</option>
              <option value="" className="font-semibold">NOV 2024</option>
              <option value="" className="font-semibold">DEC 2024</option>
            </select>
          </div>
          <hr className="mx-8 mt-0 border-t-2 border-[#53565a] my-4 "/>
          <div className="flex mx-7 items-center justify-between mb-0 ">
                <h4 className="text-lg text-[#cdcdcd]">Sales Yearly</h4>
                <h1 className="text-3xl font-semibold text-white">13,32,444</h1>
          </div>
          <PiechartProd/>
        </div>
        <div className="bg-[#33373E] md:w-[65%] rounded-3xl"><ProductTablw/></div>
      </div>
    </div>
  );
};

export default Product;


