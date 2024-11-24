import React from 'react'
import StatsCard from '../Components/CommonItems/StatsCard'

const Orders = () => {
  return (
    <div>
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
            name="Conversion Rate"
            icon={<TrendingUp />}
            iconbgcolor="bg-[#ECF0F2]"
            icontxcolor="text-[#1F1F1F]"
            classNam="bg-[#13727A]"
            fontsizz="text-[2rem]"
            amount="15.6%"
            width="w-[25.7rem]"
          />
    </div>
  )
}

export default Orders