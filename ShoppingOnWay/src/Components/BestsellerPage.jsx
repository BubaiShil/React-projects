import React from 'react'
import useShop from '../Context/Store'
import { BsCart4 } from "react-icons/bs";

const BestsellerPage = ({ name, company, image, id ,price}) => {

    const {addToCart} = useShop()

  return (
    <div className='w-64 h-[30rem] bg-white rounded-lg shadow-2xl p-4 flex flex-col items-center'>
      <img className='w-full h-56 object-cover mb-4' src={image} alt={name} />
      <h2 className='text-lg font-semibold mb-1'>{name}</h2>
      <h3 className='text-sm text-gray-500'>{company}</h3>
      <h2 className='text-lg font-bold mt-2'>₹{price}</h2>
      <div className='flex items-center gap-2 p-4 font-extrabold text-md rounded-xl text-white mt-9 cursor-pointer bg-black' onClick={() => addToCart(id)}>
        <BsCart4 className='text-white text-xl'/>
        <h1>Add to Cart</h1>
      </div>
    </div>
  )
}

export default BestsellerPage
