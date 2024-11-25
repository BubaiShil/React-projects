import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { categoryData } from "../../Data/DashboardDta";

const COLORS = ["#216B6C", "#2C8182", "#3E9495", "#4DA8A9", "#184D4E"];

const SalesPie = () => {
  return (
    <div className="bg-[#33373E] w-full p-6 rounded-3xl">
      <h2 className="text-xl md:text-2xl font-semibold text-[#E5E7EB] mb-4">
        Sales Breakdown by Category
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            outerRadius={80} // Reduced radius
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent, x, y }) => (
              <text
                x={x}
                y={y}
                fill="#cbcdd1" // Set label text color to white
                fontSize="1rem" // Adjust font size
                textAnchor="middle"
                dominantBaseline="middle" // Ensures the text is vertically centered
              >
                {`${name}: ${(percent * 100).toFixed(0)}%`}
              </text>
            )}
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesPie;
