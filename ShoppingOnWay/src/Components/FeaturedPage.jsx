import React from 'react'
import { Link } from 'react-router-dom';

const FeaturedPage = ({ name, company, image, id, price, discount }) => {

  return (
    <div className='w-64 h-[25rem] bg-white rounded-lg shadow-2xl p-4 flex flex-col items-center'>
      <Link to={`/product/${id}`} className='w-full h-56 mb-4'><img className='w-full h-56 mb-4 object-cover ' src={image} alt={name} /></Link>
      <h2 className='text-lg font-semibold mb-1'>{name}</h2>
      <h3 className='text-sm text-gray-500 mt-3'>{company}</h3>
      <div className='flex items-center space-x-4 mt-2'>
        <span className='text-lg font-bold line-through'>₹{price}</span>
        <span className='text-lg font-bold text-green-700'>₹{discount}</span>
      </div>
      
    </div>
  )
}


export default FeaturedPage
