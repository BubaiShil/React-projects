import React from 'react'
import img4 from '../assets/images/4.jpg'

const HanngerPage = () => {
    return (
        <div className="mt-8 relative">
            
            <div className="absolute inset-0 h-[33rem] z-0">
                <img className="h-[80%] w-full lg:h-full object-cover" src={img4} alt="" />
            </div>

            
            <div className="relative z-10 flex items-center justify-center lg:h-[30rem]">
                <div className="bg-white mt-28 md:mt-3 bg-opacity-70 p-7 lg:p-16 inset-0 rounded-lg shadow-2xl text-center">
                    <h1 className="text-6xl lg:text-8xl  font-['Porlane'] text-black lg:mb-2">Up to 50% Off Combos</h1>
                    <p className="text-4xl lg:text-7xl  font-['Porlane'] text-black">Buy in COMBOS and SAVE</p>
                    <button className='text-lg lg:text-2xl bg-black text-white rounded-xl p-3 lg:p-4 font-bold'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};



export default HanngerPage
