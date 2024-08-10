import React from 'react'
import useFood from '../Context/Store'

const PlaceOrder = () => {

  const {totalValue} = useFood()


  return (
    <div className="w-full max-w-lg mx-auto mt-12 p-6 bg-white rounded-3xl shadow-2xl">
      <h2 className="text-xl font-bold text-center mb-8 text-gray-800">Checkout</h2>
      <div className="flex justify-between items-center mb-6">
        <span className="text-base font-semibold text-gray-700">SubTotal</span>
        <span className="text-base font-bold text-gray-800">$ {totalValue()}</span>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-semibold text-gray-700">Discount</span>
        <span className="text-lg font-bold text-orange-500">- $5.00</span>
      </div>
      <div className="flex justify-between items-center mb-8">
        <span className="text-lg font-bold text-gray-900">Total</span>
        <span className="text-lg font-bold text-gray-900">$ {totalValue() - 5}</span>
      </div>
      <button className="w-full py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
        Pay Now
      </button>
    </div>
  );
  
}
export default PlaceOrder
