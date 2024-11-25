import React from 'react'
import { orderStatusData } from '../../Data/DashboardDta'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const OrderPie = () => {
  const COLORS = ["#216B6C", "#2C8182", "#3E9495", "#4DA8A9", "#184D4E"].reverse();


  return (
    <div className="p-6 px-2 bg-[#33373E] rounded-3xl mt-6">
      <h1 className="font-semibold text-[#e1e6ed] text-2xl px-6">
      Order Status Breakdown
      </h1>
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={orderStatusData}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              fill="#8884d8"
              labelLine={false}
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
              {orderStatusData.map((entry, index) => (
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
}

export default OrderPie