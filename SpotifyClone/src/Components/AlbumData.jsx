import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, songsData } from '../assets/assets'
import useStore from '../Context/Store'

const AlbumData = () => {

    const { id } = useParams()
    const albumdata = albumsData[id]
    //console.log(albumdata);
    const {SongPlayId} = useStore()


    return (
        <>
            <Navbar />
            <div className='lg:flex lg:flex-row gap-4 mt-12 flex-col items-center'>

                <img className='w-48 rounded-full lg:w-56' src={albumdata.image} alt="" />

                <div className='flex flex-col mt-6 gap-3 w-auto'>
                    <div className='flex items-center'>
                        <img className='w-9' src="https://cdn3.emoji.gg/emojis/2089-instagram-verified.png" width="64px" height="64px" alt="instagram_verified" />
                        <p>Verified Artist</p>
                    </div>
                    <h1 className='font-bold text-4xl md:text-7xl'>{albumdata.name}</h1>
                    <p className='mt-2'>{albumdata.desc}</p>
                    <p>40,345,232 monthly listeners</p>
                </div>
            </div>


                <h1 className='mt-12 p-3 font-bold text-2xl'>Popular</h1>
                {songsData.map((e,index) => (
                    <div onClick={()=>SongPlayId(e.id)} key={index} className='grid grid-cols-3 lg:grid-cols-4 gap-3 p-3 mt-5 items-center text-[#a7a7a7] rounded-md hover:bg-[#ffffff2b]  cursor-pointer'>
                        <p>{index+1}</p>
                        <img className='w-16 gap-3 rounded-md' src={e.image} alt="" />
                        <p>{e.name}</p>
                        <p className='hidden lg:block'>{e.duration}</p>
                    </div>
                ))}
            
        </>
    )
}

export default AlbumData
