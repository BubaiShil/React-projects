import React from 'react';
import { toast } from 'react-toastify';
import Navbar from '../Components/Navbar';
import useShop from '../Context/Store';
import Checkout from '../Components/Checkout';
import { MdRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
  const { items, bestSeller, cartItems, removeFromCart } = useShop();
  const allProducts = [...items, ...bestSeller];// key area to remember
  
  const calculateTotalPrice = () => {
    return Object.keys(cartItems).reduce((total, id) => {
      const quantity = cartItems[id];
      const item = allProducts.find((item) => item.id === id);
      return total += item.current_price * quantity;
    }, 0);
  };

  const total = calculateTotalPrice(); 


  const removeFronCartPopup=(e)=>{
    removeFromCart(e.id)
    toast.info(`1:Qty ${e.item_name} removed from cart.`)
    //console.log(e);
    //console.log(name);
    //console.log(quantity);
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-8">
        <h1 className="text-2xl md:text-3xl font-semibold mt-16 mb-5 text-center">Your Shopping Cart</h1>

        <div className="bg-white rounded-lg shadow-xl p-3 mb-6">
          
          {allProducts.map((e, index) => {
            const quantity = cartItems[e.id];
            if (quantity > 0) {
              const totalPriceForItem = e.current_price * quantity;

              return (
                <div key={index} className="grid grid-cols-6 gap-4 items-center p-4 border-b last:border-b-0">
                  <div className="col-span-1">
                    <img
                      src={e.image}
                      alt={e.name}
                      className="w-[35rem] h-28 object-cover md:object-contain rounded-lg"
                    />
                  </div>
                  <p className="col-span-2 text-lg font-medium">{e.item_name}</p>
                  <p className="col-span-1 text-gray-600">Qty: {quantity}</p>
                  
                  <p className="col-span-1 font-bold text-lg">₹{totalPriceForItem}</p>
                  <button
                    onClick={()=>removeFronCartPopup(e)}
                    className="col-span-1 text-red-500 font-bold text-2xl hover:text-red-700 transition-colors ml-3 md:ml-0"
                  >
                    <MdRemoveShoppingCart />
                  </button>
                </div>
              );
            }
            return null; 
          })}
        </div>
      </div>

      
      <Checkout total={total} />
    </>
  );
};

export default Cart;

