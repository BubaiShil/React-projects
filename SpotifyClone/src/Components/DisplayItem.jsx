import React, { useRef } from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import Home from './Home'
import AlbumData from './AlbumData'
import { albumsData } from '../assets/assets'
import { useEffect } from 'react'

const DisplayItem = () => {

    const disref = useRef()
    //console.log(disref);
    const location = useLocation()
    //console.log(location);
    const atAlbum = location.pathname.includes('album')
    //console.log(atAlbum);
    const albumId = atAlbum ? location.pathname.slice(-1) : ""
    //console.log(albumId);
    const bgcolor = albumsData[Number(albumId)].bgColor
    //console.log(bgcolor);
    

    useEffect(() => {  
        atAlbum ? disref.current.style.background = `linear-gradient(${bgcolor},#121212)` : disref.current.style.background = `#121212`     
    })



    return (
        <div ref={disref} className='w-[100%] m-2 px-6 pt-4 text-white rounded bg-[#121212] flex flex-col lg:w-[75%] overflow-auto scrollbar-hide lg:ml-0'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/album/:id' element={<AlbumData />} />
            </Routes>
        </div>
    )
}

export default DisplayItem
