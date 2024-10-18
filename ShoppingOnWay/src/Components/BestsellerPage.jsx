import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import useShop from "../Context/Store";
import { BsCart4 } from "react-icons/bs";
 

const BestsellerPage = ({ name, company, image, id, price }) => {
  const { addToCart } = useShop();
  const [quantity, setQuantity] = useState(1);

  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart(id, quantity);
    toast.success(`${quantity} ${name} Added To Cart 👍`); // Notify user
  };


  //const notify = () => toast.success("Item Added To Cart 👍");

  return (

  
    <div className="w-64 h-[30rem] bg-white rounded-lg shadow-2xl p-4 flex flex-col items-center">
      <img className="w-full h-56 object-cover mb-4" src={image} alt={name} />
      <h2 className="text-lg font-semibold mb-1">{name}</h2>
      <h3 className="text-sm text-gray-500">{company}</h3>
      <h2 className="text-lg font-bold mt-2">₹{price}</h2>
      <div className="flex items-center justify-center mt-2">
        <label className="mr-2">Qty:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-12 border text-center"
        />
      </div>

      <div
        className="flex items-center gap-2 p-4 font-extrabold text-md rounded-xl text-white mt-9 cursor-pointer bg-black"
        onClick={() => handleAddToCart() } 
      >
        <BsCart4 className="text-white text-xl" />
        <h1>Add to Cart</h1>
      </div>
      
    </div>
  );
};

export default BestsellerPage;
