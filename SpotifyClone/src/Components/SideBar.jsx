import React from 'react'
import { assets } from "../assets/assets"

const SideBar = () => {
    return (
        <div className=' w-[25%] h-full hidden lg:flex flex-col'>
            <div className='bg-[#121212] mt-2 font-semibold gap-5 rounded-xl h-[15%] flex flex-col justify-around p-6'>
                <div className='flex gap-3 items-center'>
                    <img className='w-6' src={assets.home_icon} alt="" />
                    <h3 className='text-white'>Home</h3>
                </div>
                <div className='flex gap-3 items-center'>
                    <img className='w-6' src={assets.search_icon} alt="" />
                    <h3 className='text-white'>Search</h3>
                </div>
            </div>

            <div className='h-[85%] bg-[#121212] mt-2 rounded-xl'>
                <div className='flex items-center justify-between p-4 font-semibold'>
                    <div className='flex gap-3 items-center '>
                        <img className='w-9' src={assets.stack_icon} alt="" />
                        <h2 className='text-white'>Your Library</h2>
                    </div>

                    <div className='flex justify-between gap-3'>
                        <img className='w-5' src={assets.arrow_icon} alt="" />
                        <img className='w-5' src={assets.plus_icon} alt="" />
                    </div>
                </div>


                <div className='bg-[#242424] text-white p-4 flex flex-col items-start gap-1 mx-2 rounded-md'>
                    <h1 className='font-semibold'>Create your first playlist</h1>
                    <p className='font-light'>It's easy we will help you</p>
                    <button className='text-[#242424] bg-white rounded-full p-2 px-5 mt-3 font-semibold'>Create Playlist</button>
                </div>
                <div className='bg-[#242424] text-white p-4 flex flex-col items-start gap-1 mx-2 rounded-md mt-3'>
                    <h1 className='font-semibold'>Let's findsome podcasts to follow</h1>
                    <p className='font-light'>we'll keep you update on new episodes</p>
                    <button className='text-[#242424] bg-white rounded-full p-2 px-5 mt-3 font-semibold'>Browse podcasts</button>
                </div>


                <div className='text-white flex gap-1 p-3 border border-solid rounded-full w-28 cursor-pointer hover:border-slate-400 hover:text-slate-400 mx-4 mt-36 font-semibold '>
                🌐<p>English</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar
