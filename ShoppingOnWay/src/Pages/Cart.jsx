import React from 'react'
import Navbar from '../Components/Navbar'
import useShop from '../Context/Store'
import Checkout from '../Components/Checkout';

const Cart = () => {

  const {items,cartItems,removeFromCart} = useShop()

  return (
    <>
      <Navbar />
      <div className=" bg-gray-100 p-8">
        <h1 className="text-3xl font-semibold mt-16 text-center">Your Shopping Cart</h1>

        <div className="bg-white rounded-lg shadow-xl p-3 mb-6">
          {items.map((e, index) => {
            if (cartItems[e.id] > 0) {
              return (
                <div key={index} className="grid grid-cols-6 gap-4 items-center p-4 border-b last:border-b-0">
                  <div className="col-span-1">
                    <img src={e.image} alt={e.name} className="w-20 h-16 object-cover rounded-lg" />
                  </div>
                  <p className="col-span-2 text-lg font-medium">{e.name}</p>
                  <button
                    onClick={()=> removeFromCart(e.id)}
                    className="col-span-1 text-red-500 font-bold text-2xl hover:text-red-700 transition-colors">
                    x
                  </button>
                </div>
              );
            }
            return null; // Ensure a return statement when the condition is not met
          })}
        </div>
      </div>

      <Checkout/>
    </>
  );
};

export default Cart;
