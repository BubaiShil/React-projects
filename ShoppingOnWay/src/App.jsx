import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home'
//import './App.css'
import {Routes,Route} from 'react-router-dom'
import Cart from './Pages/Cart'
import LocomotiveScroll from 'locomotive-scroll';
//import BuyNow from './Pages/BuyNow'
import Product from './Pages/Product'

function App() {
  //const [count, setCount] = useState(0)

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
