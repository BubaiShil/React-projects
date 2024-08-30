import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Offer from './Components/Offer'
import CardsItem from './Components/CardsItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Offer/>
      <CardsItem/>
    </>
  )
}

export default App
