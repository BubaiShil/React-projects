import React from "react";
import { useState } from "react";
import { productData } from "../../Data/DashboardDta";
import { Edit, Search, Trash2 } from "lucide-react";

const ProductTablw = () => {

    const [searchItm, setSearchItm] = useState('')
    const [filteredItem, setFilteredItem] = useState(productData)


    const HandleFilter =(e)=>{
        const requiredItm = e.target.value.toLowerCase()
        setSearchItm(requiredItm)

        const fillResult = productData.filter((e)=>( e.name.toLowerCase().includes(requiredItm) || e.category.toLowerCase().includes(requiredItm)))
        setFilteredItem(fillResult)
    }


  return (
    <div className="mx-6">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-white text-2xl font-semibold tracking-tighter">
          Product List
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            onChange={HandleFilter}
            value={searchItm}
            className="bg-[#767E89] text-white placeholder-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#13727A]"
          />
          <Search className="absolute left-3 top-2.5 text-white" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto divide-y">
        <table className="divide-y min-w-full divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredItem.map((e) => (
              <tr key={e.id} className="">
                <td className="px-6 py-[0.77rem] whitespace-nowrap text-sm font-medium text-gray-100 flex gap-4 items-center">
                  <img
                    src={e.img}
                    alt="Product img"
                    className="size-10 rounded-full"
                  />
                  {e.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {e.category}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ${e.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {e.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {e.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
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

export default ProductTablw;
