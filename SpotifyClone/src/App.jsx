//import { useState } from 'react'
import './App.css'
import Player from './Components/Player'
import SideBar from './Components/SideBar'

function App() {


  return (
    <div className='bg-black h-screen'>
      <div className='h-[90%] flex ml-2'>
        <SideBar />
      </div>
      <div className='bg-black h-[10%]'>
        <Player/>
      </div>
    </div>
  )
}

export default App
