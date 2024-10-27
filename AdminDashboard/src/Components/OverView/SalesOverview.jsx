import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  BarChart,
  CartesianGrid,
  Tooltip,
  Bar,
  Legend,
} from "recharts";
import { salesData } from "../../Data/DashboardDta";

const SalesOverview = () => {
  return (
    <div className="bg-[#32363E] p-4 md:p-6 lg:p-8 rounded-3xl flex flex-col">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold text-[#E5E7EB] mb-4">
        Sales Overview
      </h2>
      
      {/* Chart Container */}
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height={300}> {/* Adjust height as needed */}
          <BarChart data={salesData} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#32363E",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend wrapperStyle={{ color: "#E5E7EB" }} />

            {/* Single Bar for Sales */}
            <Bar
              dataKey="sales"
              fill="#00CEC3"
              radius={[5, 5, 0, 0]}
              barSize={60}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesOverview;
