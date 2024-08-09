import React from 'react'
import useFood from '../Context/Store'

const Cart = () => {


  const { food_list, cartItems,removeFromCart } = useFood()


  return (
    <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-3xl font-semibold mb-8 text-center">Your Shopping Cart</h1>

    <div className="bg-white rounded-lg shadow-xl p-5 mb-6">
      {food_list.map((e, index) => {
        if (cartItems[e._id] > 0) {
          return (
            <div key={index} className="grid grid-cols-6 gap-4 items-center p-4 border-b last:border-b-0">
              <div className="col-span-1">
                <img src={e.image} alt={e.name} className="w-20 h-16 object-cover rounded-lg" />
              </div>
              <p className="col-span-2 text-lg font-medium">{e.name}</p>
              <p className="col-span-1 text-lg">${e.price}</p>
              <p className="col-span-1 text-lg">Qty: {cartItems[e._id]}</p>
              <p className="col-span-1 text-lg font-semibold">${e.price * cartItems[e._id]}</p>
              <button 
                onClick={() => removeFromCart(e._id)} 
                className="col-span-1 text-red-500 font-bold text-3xl hover:text-red-700 transition-colors">
                x
              </button>
            </div>
          )
        }
      })}
    </div>
  </div>
  )

}
export default Cart
