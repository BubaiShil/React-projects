import React from 'react'

const Albums = ({image,description,name,id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer '>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-300 text-sm'>{description}</p>
    </div>
  )
}

export default Albums
