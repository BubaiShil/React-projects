import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  SALES_CHANNEL_DATA,
  MONTHLY_ACTIVE_USERS,
} from "../../Data/DashboardDta";

const SalesChannelLine = () => {
  return (
    <div className="mt-2 md:w-[203%] ">
      <ResponsiveContainer className="bg-[#32363E] px-0 rounded-3xl p-5" width="100%" height={300}>
        <LineChart data={MONTHLY_ACTIVE_USERS}>
          <XAxis dataKey="month" tick={{ fill: "#FFFFFF", fontSize: 14 }} />
          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#13727A",
              border: "none",
              borderRadius: "1rem",
              padding: "1rem",
            }}
            itemStyle={{ color: "#FFF" }}
          />
          <Legend wrapperStyle={{ color: "#FFFFFF", fontSize: "14px" }} />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#13727A"
            strokeWidth={3}
            dot={{ fill: "#13727A" }}
            name="Monthly Active Users"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChannelLine;
