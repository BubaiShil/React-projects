import React from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import { orderData } from "../../Data/DashboardDta";

const OrderTble = () => {
  const [inpData, setInpData] = useState("");
  const [filteredDta, setFilteredDta] = useState(orderData);

  const handleFilter = (e) => {
    const currentInData = e.target.value.toLowerCase();
    setInpData(currentInData);

    const FillDta = orderData.filter(
      (e) =>
        e.customer.toLowerCase().includes(currentInData) ||
        e.status.toLowerCase().includes(currentInData)
    );
    setFilteredDta(FillDta);
  };

  return (
    <div className="pt-5">
      <div className="flex items-center justify-between p-8">
        <h2 className="text-white text-2xl font-semibold tracking-tighter">
          Order List
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            onChange={handleFilter}
            value={inpData}
            className="bg-[#767E89] text-white placeholder-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#13727A]"
          />
          <Search className="absolute left-3 top-2.5 text-white" size={18} />
        </div>
      </div>

      <div className="divide-y overflow-x-auto">
        <table className="divide-y min-w-full divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredDta.map((e) => (
              <tr key={e.id}>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-sm font-medium text-gray-100">
                    {e.id}
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-sm text-gray-300">{e.customer}</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="px-2 inline-flex justify-center w-20 text-xs leading-5 font-semibold rounded-full bg-[#13727A] text-white p-1">
                    ₹{e.total}
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div
                    className={`px-3 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      e.status === "Shipped"
                        ? "bg-green-800 text-green-100"
                        : e.status === "Delivered"
                        ? "bg-blue-800 text-blue-100"
                        : e.status === "Pending"
                        ? "bg-yellow-800 text-yellow-100"
                        : "bg-red-800 text-red-100"
                    }`}
                  >
                    {e.status}
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="px-2 inline-flex justify-center w-20 text-xs leading-5 font-semibold rounded-full bg-[#13727A] text-white p-1">
                    {e.date}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTble;
