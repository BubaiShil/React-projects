import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { userGrowthData } from "../../Data/DashboardDta";

const UserGrowthLineCh = () => {
  return (
    <div className="p-6 px-2">
      <h1 className="font-semibold text-[#e1e6ed] text-2xl px-6">
        User Growth
      </h1>
      <div>
        <ResponsiveContainer width="100%" height={400} className="pt-6">
          <LineChart
            data={userGrowthData}
            margin={{
              top: 20,
              right: 20,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke="#3c3e42" />
            <XAxis dataKey="month" stroke="#aeafb0" />
            <YAxis stroke="#aeafb0" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#00CEC3",
                borderColor: "#4B5563",
                borderRadius: "1rem",
                padding: "1rem",
              }}
              itemStyle={{ color: "black" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#00CEC3"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowthLineCh;
