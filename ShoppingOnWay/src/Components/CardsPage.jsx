import React from 'react'

const CardsPage = ({ name, company, image, id }) => {
    return (
      <div className='w-64 h-[30rem] bg-white rounded-lg shadow-md p-4 flex flex-col items-center'>
        <img className='w-full h-56 object-cover mb-4' src={image} alt={name} />
        <h2 className='text-lg font-semibold mb-1'>{name}</h2>
        <h3 className='text-sm text-gray-500'>{company}</h3>
      </div>
    )
  }
   

export default CardsPage
