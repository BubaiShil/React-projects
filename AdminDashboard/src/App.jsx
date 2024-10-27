import { useState } from 'react'
import SideBar from './/Components/CommonItems/SideBar'
import { Route, Routes } from 'react-router-dom'
import OverViewHome from './Pages/OverViewHome'
import Product from './Pages/Product'
import Orders from './Pages/Orders'
import Sales from './Pages/Sales'
import Navbar from './Components/CommonItems/Navbar'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex bg-[#20232A] h-screen overflow-hidden'>
       
        <SideBar/>


        <div className='flex flex-col flex-grow  overflow-auto'>
          
        <Navbar/>
       {/* <div className='flex flex-col flex-grow'> */}
        <Routes >
          <Route path='/' element={<OverViewHome/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/sales' element={<Sales/>}/>
        </Routes>
        {/* </div> */}
        
        </div>
      </div>
    </>
  )
}

export default App
