import React from 'react'
import { assets, songsData } from '../assets/assets'

const Player = () => {
    return (
        <div className='flex text-white items-center justify-between px-4 mt-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img src={songsData[0].image} className='w-12' alt="" />

                <div>
                    <p>{songsData[0].name}</p>
                    <p>{songsData[0].desc.slice(0, 12)}</p>
                </div>
            </div>

            <div className='flex flex-col items-center m-auto gap-1'>
                <div className='flex items-center gap-5'>
                    <img className='w-5' src={assets.shuffle_icon} alt="" />
                    <img className='w-5' src={assets.prev_icon} alt="" />
                    <img className='w-5' src={assets.play_icon} alt="" />
                    <img className='w-5' src={assets.next_icon} alt="" />
                    <img className='w-5' src={assets.loop_icon} alt="" />
                </div>

                <div className='flex items-center gap-3'>
                    <p>1:08</p>
                    <div className='border border-b-4 w-[33vw] max-w-[500px] rounded'></div>
                    <p>6:65</p>
                </div>
            </div>

            <div className='hidden lg:flex gap-2 items-center justify-center opacity-55'>
                <img className='w-4' src={assets.plays_icon} alt="" />
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                <img className='w-4' src={assets.speaker_icon} alt="" />
                <img className='w-4' src={assets.volume_icon} alt="" />
                <div className='border border-b-4 w-32 rounded'></div>
                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />
            </div>
        </div>
    )
}

export default Player
