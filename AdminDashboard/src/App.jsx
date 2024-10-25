import { useState } from 'react'
import SideBar from './Components/SideBar'
import { Route, Routes } from 'react-router-dom'
import OverViewHome from './Pages/OverViewHome'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex bg-[#20232A] h-screen overflow-hidden'>
        <SideBar/>

        <Routes>
          <Route path='/' element={<OverViewHome/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
