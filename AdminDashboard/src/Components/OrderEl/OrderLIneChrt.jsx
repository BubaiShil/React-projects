import React from 'react'
import { dailyOrdersData } from '../../Data/DashboardDta'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const OrderLIneChrt = () => {
  return (
    <div className="p-6 px-2 bg-[#33373E] rounded-3xl mt-6">
      <h1 className="font-semibold text-[#e1e6ed] text-2xl px-6">Daily Orders</h1>
      <div>
        <ResponsiveContainer width="100%" height={400} className='pt-6'>
          <LineChart data={dailyOrdersData}>
            <CartesianGrid stroke="#5c6066" strokeDasharray="3 3"/>
            <XAxis dataKey="date" stroke="#aeafb0"/>
            <YAxis stroke="#aeafb0"/>
            <Tooltip contentStyle={{
                backgroundColor: "#00CEC3",
                borderColor: "#4B5563",
                borderRadius:'1rem',padding:'1rem'
              }}
              itemStyle={{ color: "black" }}/>
            <Legend />
            <Line
              type='monotone'
              dataKey="orders"
              stroke="#00CEC3"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default OrderLIneChrt