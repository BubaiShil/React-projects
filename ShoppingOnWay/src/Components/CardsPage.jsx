import React from 'react'

const CardsPage = ({ name, company, image, id }) => {
    return (
      <div className='w-64 h-[30rem] bg-white rounded-lg shadow-2xl p-4 flex flex-col items-center'>
        <img className='w-full h-56 object-cover mb-4' src={image} alt={name} />
        <h2 className='text-lg font-semibold mb-1'>{name}</h2>
        <h3 className='text-sm text-gray-500'>{company}</h3>
        <button className='mt-3 p-4 bg-slate-400 rounded-xl'>Add to Cart</button>
      </div>
    )
  }
   

export default CardsPage
