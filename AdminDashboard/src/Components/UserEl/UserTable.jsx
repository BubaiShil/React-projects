import React from "react";
import { useState } from "react";
import { Search} from "lucide-react";
import { userData } from "../../Data/DashboardDta";

const UserTable = () => {

  const [searchIn, setSearchIn] = useState('')
  const [filteredRes, setFilteredRes] = useState(userData)


  const handleSearch=(e)=>{
      const InpVal = e.target.value.toLowerCase()
      setSearchIn(InpVal)

      const res = userData.filter((el)=>( el.name.toLowerCase().includes(InpVal) || el.status.toLowerCase().includes(InpVal)))
      setFilteredRes(res)
  }


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
            onChange={handleSearch}
            value={searchIn}
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
              <th className="px-2 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-500 ">
            {filteredRes.map((e) => (
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

                <td className=" py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-300">{e.email}</div>
                </td>

                <td className="py-4 whitespace-nowrap">
                  <span className="px-2 flex justify-center w-20 text-xs leading-5 font-semibold rounded-full bg-[#13727A] text-white p-1">
                    {e.role}
                  </span>
                </td>

                <td>
                  <span
                    className={`px-3 inline-flex  text-xs leading-5 font-semibold rounded-full ${
                      e.status === "Active"
                        ? "bg-green-800 text-green-100"
                        : "bg-red-800 text-red-100"
                    }`}
                  >
                    {e.status}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-[#7ab3b9] hover:text-indigo-300 mr-2">
                    Edit
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Delete
                  </button>
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
