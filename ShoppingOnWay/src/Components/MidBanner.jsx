import React from 'react'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.jpg'
import banner4 from '../assets/images/banner4.jpg'
//import banner1 from '../assets/images/banner1.jpg'
import banner from '../assets/images/banner.jpg'

const MidBanner = () => {
  return (
    <div className='mt-3 h-[43rem] flex gap-2 mx-2 '>

      <div className='w-[50%]'>
        <img className='h-full w-full object-fill rounded-lg ' src={banner2} alt="" />
      </div>


      <div className='flex flex-col w-[50%] gap-2'>

        <div className='h-[50%] w-full'>
          <img src={banner} className='h-full w-full object-cover rounded-lg ' alt="" />
        </div>

        <div className='flex w-full h-[50%] gap-2 '>
          <img className='object-cover w-[50%] h-full rounded-lg ' src={banner3} alt="" />
          <img className='object-cover w-[50%] h-full rounded-lg ' src={banner4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MidBanner
