import React from 'react'
//import clip1 from '../../public/clip1'

const Hero = () => {
  return (
    <div className='relative w-full cursor-default'>

      <video autoPlay loop muted src="/clip2.mp4"></video>
      <div className='absolute inset-0 flex items-center justify-center '>
        <div className='text-[#e2dcdc] mt-6 text-3xl md:text-7xl lg:text-8xl font-bold'>
          <h1 className='text-[#dadada] text-3xl md:text-7xl lg:text-8xl font-bold'>
            Discover Your Style, <br /> Shop the Latest Trends
          </h1>
          <p className='text-[#dadada] text-sm md:text-xl mt-4'>
            Unbeatable prices on the hottest fashion picks. <br /> Shop now and elevate your wardrobe!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
