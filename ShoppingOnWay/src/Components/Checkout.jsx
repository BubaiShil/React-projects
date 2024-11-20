import React from 'react'

const Checkout = ({total}) => {
    
  
    return (
      <div className="bg-gray-100 p-8 flex flex-col justify-center  mt-6 md:w-[60%] md:mx-72 h-full rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Checkout Summary</h2>
  
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">Subtotal:</p>
          <p className="text-lg font-semibold">₹{total.toFixed(2)}</p>
        </div>
  
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">Extra-Discount:</p>
          <p className="text-lg font-semibold text-red-500">-₹99</p>
        </div>
  
        <hr className="my-4" />
  
        <div className="flex justify-between items-center mb-6">
          <p className="text-xl font-semibold">Total:</p>
          <p className="text-xl font-bold">₹{total-99}</p>
        </div>
  
        <button className="md:mx-32 flex justify-center font-bold bg-black text-white py-4 rounded-lg hover:bg-gray-500 transition-all">
          Proceed to Payment
        </button>
      </div>
    );
}

export default Checkout
