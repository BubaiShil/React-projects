import React from 'react';
import banner2 from '../assets/images/banner2.webp';  
import banner3 from '../assets/images/banner3.webp';
import banner4 from '../assets/images/banner4.webp';
import banner from '../assets/images/banner.webp';

const MidBanner = () => {
  return (
    <div className='mt-3 h-[43rem] flex gap-2 mx-2'>

      <div className='w-[50%]'>
        <img 
          className='h-full w-full object-cover rounded-lg' 
          src={banner2} 
          alt="Banner 2" 
          loading="lazy"  
        />
      </div>

      <div className='flex flex-col w-[50%] gap-2'>
        <div className='h-[50%] w-full'>
          <img 
            src={banner} 
            className='h-full w-full object-cover rounded-lg' 
            alt="Banner 1" 
            loading="lazy"  
          />
        </div>

        <div className='flex w-full h-[50%] gap-2'>
          <img 
            className='object-cover w-[50%] h-full rounded-lg' 
            src={banner3} 
            alt="Banner 3" 
            loading="lazy" 
          />
          <img 
            className='object-cover w-[50%] h-full rounded-lg' 
            src={banner4} 
            alt="Banner 4" 
            loading="lazy"  
          />
        </div>
      </div>
    </div>
  );
}

export default MidBanner;
