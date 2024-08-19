//import { useState } from 'react'
import './App.css'
import DisplayItem from './Components/DisplayItem'
import Player from './Components/Player'
import SideBar from './Components/SideBar'
import useStore from './Context/Store'


function App() {

  const {audioRef,track} = useStore()


  return (
    <div className='bg-black h-screen overflow-auto scrollbar-hide'>
      <div className='h-[90%] flex ml-2'>
        <SideBar />
        <DisplayItem/>
      </div>
      <div className='bg-black h-[10%]'>
        <Player/>
      </div>
      <audio preload='auto' ref={audioRef} src={track.file}></audio>
    </div>
  )
}

export default App
