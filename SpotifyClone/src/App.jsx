//import { useState } from 'react'
import './App.css'
import DisplayItem from './Components/DisplayItem'
import Player from './Components/Player'
import SideBar from './Components/SideBar'


function App() {


  return (
    <div className='bg-black h-screen'>
      <div className='h-[90%] flex ml-2'>
        <SideBar />
        <DisplayItem/>
      </div>
      <div className='bg-black h-[10%]'>
        <Player/>
      </div>
    </div>
  )
}

export default App
