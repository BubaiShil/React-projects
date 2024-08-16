import React from 'react'
import { useNavigate } from 'react-router-dom'

const Albums = ({ image, description, name, id }) => {

    const navigate = useNavigate()

    return (
        <div onClick={()=> navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded hover:bg-[#ffffff26] cursor-pointer '>
            <img className='rounded' src={image} alt="" />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-300 text-sm'>{description}</p>
        </div>
    )
}

export default Albums
