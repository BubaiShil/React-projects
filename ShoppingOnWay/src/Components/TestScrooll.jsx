import React from 'react'
import Offer from './Offer'
import FeaturedItem from './FeaturedItem'


const TestScrooll = () => {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".1">
      <Offer/>
      <FeaturedItem/>
    </div>
  )
}

export default TestScrooll
