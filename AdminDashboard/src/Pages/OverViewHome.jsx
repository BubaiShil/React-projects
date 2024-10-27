import React from 'react'
import StatsCard from '../Components/CommonItems/StatsCard'
import SalesOverview from '../Components/OverView/SalesOverview'
import UserAreaView from '../Components/OverView/UserAreaView';
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";

const OverViewHome = () => {
  return (
    <div className='mt-5  h-[29rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 text-white mx-4 gap-6'>
        
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

              <StatsCard name="Earnings" icon={<FaDollarSign />} iconbgcolor='bg-[#ECF0F2]' icontxcolor='text-[#1F1F1F]' classNam='bg-[#13727A]' fontsizz='text-[2rem]' subpart='Monthly Revenue' amount='$1,32,424'/>
              <StatsCard name="New Users" userArea={<UserAreaView/>} icon={<FaUserGroup />} iconbgcolor='bg-[#02B3A9]' icontxcolor='text-[#ECF0F2]' classNam='bg-[#32363E]' fontsizz='text-xl'  amount='1,833'/>
              <StatsCard name="Total Sales" icon={<AiTwotoneThunderbolt />} iconbgcolor='bg-[#02B3A9]' icontxcolor='text-[#ECF0F2]' classNam='bg-[#32363E]' fontsizz='text-xl'  amount='$35,562'/>
              <StatsCard name="Conversion Rate" icon={<GiNetworkBars />} iconbgcolor='bg-[#02B3A9]' icontxcolor='text-[#ECF0F2]' classNam='bg-[#32363E]' fontsizz='text-xl'  amount='15.6%'/>
          </div>
          <SalesOverview/>
      </div>
    </div>
  )
}

export default OverViewHome