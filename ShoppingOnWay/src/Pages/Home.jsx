import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Offer from '../Components/Offer'
// import CardsItem from '../Components/CardsItem'
//import FeaturedItem from '../Components/FeaturedItem'
import BestsellerItem from '../Components/BestsellerItem'
import MidBanner from '../Components/MidBanner'
import HanngerPage from '../Components/HanngerPage'
import Footer from '../Components/Footer'
import TestScrooll from '../Components/TestScrooll'
import ConnectPart from '../Components/ConnectPart'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TestScrooll/>
      
      <MidBanner/>
      <BestsellerItem/>
      <HanngerPage/>
      <ConnectPart/>
      <Footer/>
    </div>
  )
}

export default Home
