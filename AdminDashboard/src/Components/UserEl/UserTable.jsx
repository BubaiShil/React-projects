import React from "react";
import { Edit, Search, Trash2 } from "lucide-react";
import { userData } from "../../Data/DashboardDta";

const UserTable = () => {
  return (
    <div className="mx-6">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-white text-2xl font-semibold tracking-tighter">
          Users List
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="bg-[#767E89] text-white placeholder-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#13727A]"
          />
          <Search className="absolute left-3 top-2.5 text-white" size={18} />
        </div>
      </div>

      <div className="divide-y overflow-x-auto">
        <table className="divide-y min-w-full divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {userData.map((e) => (
              <tr key={e.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                        <img
                          src={e.img}
                          alt="Product img"
                          className="size-10 rounded-full"
                        />
                      </div>
                    </div>

                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-100">
                        {e.name}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{e.email}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
