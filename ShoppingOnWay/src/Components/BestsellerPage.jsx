import React from 'react'
import useShop from '../Context/Store'

const BestsellerPage = ({ name, company, image, id }) => {

    const {addToCart} = useShop()

  return (
    <div className='w-64 h-[30rem] bg-white rounded-lg shadow-2xl p-4 flex flex-col items-center'>
      <img className='w-full h-56 object-cover mb-4' src={image} alt={name} />
      <h2 className='text-lg font-semibold mb-1'>{name}</h2>
      <h3 className='text-sm text-gray-500'>{company}</h3>
      <div className='mt-3 p-4 bg-slate-400 rounded-xl' onClick={() => addToCart(id)}>Add to Cart</div>
    </div>
  )
}

export default BestsellerPage
