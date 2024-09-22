import React from 'react'

const Checkout = () => {
    
  
    return (
      <div className="bg-gray-100 p-8 flex flex-col justify-center mt-6 w-[60%] mx-72">
        <h2 className="text-2xl font-bold mb-6">Checkout Summary</h2>
  
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">Subtotal:</p>
          <p className="text-lg font-semibold">$33</p>
        </div>
  
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">Discount:</p>
          <p className="text-lg font-semibold text-red-500">-$6</p>
        </div>
  
        <hr className="my-4" />
  
        <div className="flex justify-between items-center mb-6">
          <p className="text-xl font-semibold">Total:</p>
          <p className="text-xl font-bold">$3</p>
        </div>
  
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all">
          Proceed to Payment
        </button>
      </div>
    );
}

export default Checkout