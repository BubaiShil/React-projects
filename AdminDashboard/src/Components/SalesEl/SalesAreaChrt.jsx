import React from 'react'
import { salesData } from "../../Data/DashboardDta";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SalesAreaChrt = () => {
  return (
    <div className="p-6 pb-0 bg-[#33373E] rounded-3xl w-[48rem]">
      <h2 className="text-xl md:text-2xl font-semibold text-[#E5E7EB] mb-4">
        Sales Overview
      </h2>
      
      <ResponsiveContainer width="100%" height={360}>
      <AreaChart
        data={salesData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3" stroke="#4B5563" />
        <XAxis dataKey="name" stroke="#aeafb0" />
        <YAxis stroke="#aeafb0" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#33373E",
            borderColor: "#4B5563",
            color: "#FFFFFF",
            borderRadius: "1rem",
            padding: "1rem",
          }}
          itemStyle={{ color: "#FFFFFF" }}
        />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#00CEC3"
          fill="url(#colorSales)"
        />
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00CEC3" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00CEC3" stopOpacity={0} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>

    </div>
  )
}

export default SalesAreaChrt