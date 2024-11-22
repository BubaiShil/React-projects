import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { salesData } from "../../Data/DashboardDta";

const SalesBar = () => {
  return (
    <div className="p-6 pb-0">
      <h2 className="text-xl md:text-2xl font-semibold text-[#E5E7EB] mb-4">
        Sales Overview
      </h2>
      
      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          data={salesData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          
        >
          <CartesianGrid strokeDasharray="3" stroke="#4B5563"  />
          <XAxis dataKey="name" stroke="#aeafb0" />
          <YAxis stroke="#aeafb0"/>
          <Tooltip contentStyle={{
                backgroundColor: "#33373E",
                borderColor: "#4B5563",
                color: "#FFFFFF",
                borderRadius:'1rem',padding:'1rem'
              }}
              itemStyle={{ color: "#FFFFFF" }}/>
          <Bar dataKey="sales" fill="#00CEC3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesBar;
