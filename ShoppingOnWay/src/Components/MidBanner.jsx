import React from 'react';
import banner2 from '../assets/images/banner2.webp';  
import banner3 from '../assets/images/banner3.webp';
import banner4 from '../assets/images/banner4.webp';
import banner from '../assets/images/banner.webp';

const MidBanner = () => {
  return (
    <div className='mt-3 h-[43rem] flex gap-2 mx-2'>

      <div className='w-[50%] group relative'>
        <img 
          className='h-full w-full object-cover rounded-lg' 
          src={banner2} 
          alt="Oversized T-shirt Collection" 
          loading="lazy"  
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <span className='text-white text-8xl font-["Porlane"] '>Oversized T-shirts Collection</span>
        </div>
      </div>

      <div className='flex flex-col w-[50%] gap-2'>
        <div className='h-[50%] w-full group relative'>
          <img 
            src={banner} 
            className='h-full w-full object-cover rounded-lg' 
            alt="Oversized T-shirt Designs" 
            loading="lazy"  
          />
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <span className='text-white text-7xl font-["Porlane"]'>Oversized T-shirt Designs</span>
          </div>
        </div>

        <div className='flex w-full h-[50%] gap-2'>
          <div className='w-[50%] h-full group relative'>
            <img 
              className='object-cover w-full h-full rounded-lg' 
              src={banner3} 
              alt="Latest Oversized Collection" 
              loading="lazy" 
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <span className='text-white text-5xl font-["Porlane"] '>Latest Oversized Collection</span>
            </div>
          </div>

          <div className='w-[50%] h-full group relative'>
            <img 
              className='object-cover w-full h-full rounded-lg' 
              src={banner4} 
              alt="Trendy Oversized Styles" 
              loading="lazy"  
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <span className='text-white text-5xl font-["Porlane"] '>Trendy Oversized Styles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidBanner;
