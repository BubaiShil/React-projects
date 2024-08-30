import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Offer from '../Components/Offer'
import CardsItem from '../Components/CardsItem'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Offer/>
      <CardsItem/>
    </div>
  )
}

export default Home
