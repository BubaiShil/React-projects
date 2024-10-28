import React from "react";
import { userGrowthData } from "../../Data/DashboardDta";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const UserAreaView = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" className="p-0" height={80}>
        <AreaChart data={userGrowthData}>
          <Tooltip
            contentStyle={{ backgroundColor: "transparent", border: "none"}}
            itemStyle={{ color: "#FFF" }}
          />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#00CEC3"
            fill="#356F71"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserAreaView;
