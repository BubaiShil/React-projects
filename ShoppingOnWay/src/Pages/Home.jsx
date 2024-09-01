import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Offer from '../Components/Offer'
// import CardsItem from '../Components/CardsItem'
import FeaturedItem from '../Components/FeaturedItem'
import BestsellerItem from '../Components/BestsellerItem'
import MidBanner from '../Components/MidBanner'
import HanngerPage from '../Components/HanngerPage'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Offer/>
      <FeaturedItem/>
      <BestsellerItem/>
      <MidBanner/>
      <HanngerPage/>
    </div>
  )
}

export default Home
