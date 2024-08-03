import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import PlaceOrder from './Pages/PlaceOrder'
import Cart from './Pages/Cart'
import FoodDisplay from './Components/FoodDisplay'


function App() {


  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/placeorder' element={<PlaceOrder/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     <FoodDisplay />
    </>
  )
}

export default App
