import React from 'react'
import banner from '../assets/images/banner.jpg'
import banner1 from '../assets/images/banner1.jpg'

const MidBanner = () => {
  return (
    <div className='mt-3 h-[40rem] '>
      <img src={banner} className='h-96' alt="" />
      <img src={banner1} className='h-96' alt="" />
    </div>
  )
}

export default MidBanner
