import React from 'react'
import { assets, songsData } from '../assets/assets'
import useStore from '../Context/Store'

const Player = () => {

    const {SongBar,SongBg,playStatus,Play,Pause,time,track} = useStore()


    return (
        <div className='flex text-white items-center justify-between px-4 mt-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img src={track.image} className='w-12' alt="" />

                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>

            <div className='flex flex-col items-center m-auto gap-1'>
                <div className='flex items-center gap-5'>
                    <img className='w-5 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img className='w-5 cursor-pointer' src={assets.prev_icon} alt="" />
                    {
                        !playStatus 
                        ? <img onClick={Play} className='w-5 cursor-pointer' src={assets.play_icon} alt="" />
                        : <img onClick={Pause} className='w-5 cursor-pointer' src={assets.pause_icon} alt="" />
                    }
                    <img className='w-5 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-5 cursor-pointer' src={assets.loop_icon} alt="" />
                </div>

                <div className='flex items-center gap-3'>
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={SongBar} className='border border-b-4 w-[33vw] max-w-[500px] rounded'></div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
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
