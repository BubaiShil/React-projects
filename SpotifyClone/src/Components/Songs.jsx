import React from 'react'
import useStore from '../Context/Store'

const Songs = ({ id, name, image, description }) => {

    const {SongPlayId} = useStore()

    return (
        <div onClick={()=>SongPlayId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt="" />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-300 text-sm'>{description}</p>

        </div>
    )
}

export default Songs
