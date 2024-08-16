import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home'

const DisplayItem = () => {
    return (
        <div className='w-[100%] m-2 px-6 pt-4 text-white rounded bg-[#121212] flex flex-col lg:w-[75%] overflow-auto scrollbar-hide lg:ml-0'>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default DisplayItem
