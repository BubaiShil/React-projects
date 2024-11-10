import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { userInsightsData } from "../../Data/DashboardDta";

const UserCOLpieCh = () => {
  const COLORS = ["#ff6347","#1e90ff", "#ffd700", "#32cd32", "#8a2be2"];


  return (
    <div className="p-6 px-2">
      <h1 className="font-semibold text-[#e1e6ed] text-2xl px-6">
        User Insights
      </h1>
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={userInsightsData}
              dataKey="value"
              nameKey="name"
              outerRadius={150}
              fill="#8884d8"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`} 
            >
              {userInsightsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip contentStyle={{borderRadius: '8px'}}/>
            <Legend wrapperStyle={{paddingTop: 20,
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold'}}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserCOLpieCh;
