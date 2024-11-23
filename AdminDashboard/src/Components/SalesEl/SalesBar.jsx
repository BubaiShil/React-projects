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
import { dailySalesData } from "../../Data/DashboardDta";

const SalesBar = () => {
  return (
    <div className="md:p-6 p-3 bg-[#33373E] pb-0 w-full rounded-3xl">
      <h2 className="text-xl md:text-2xl font-semibold text-[#E5E7EB] mb-4">
        Daily Sales Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        
        <BarChart
          data={dailySalesData} 
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3" stroke="#4B5563" />
          <XAxis
            dataKey="day" 
            stroke="#AEAFB0"
            tick={{ fontSize: 12 }}
          />
          <YAxis stroke="#AEAFB0" tick={{ fontSize: 12 }} />
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
          <Bar dataKey="sales" fill="#00CEC3" barSize={30} />{" "}
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesBar;
