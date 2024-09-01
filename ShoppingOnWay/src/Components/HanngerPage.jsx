import React from 'react'
import img4 from '../assets/images/4.jpg'

const HanngerPage = () => {
    return (
        <div className="mt-8 relative">
            
            <div className="absolute inset-0 h-[33rem] z-0">
                <img className="w-full h-full object-cover" src={img4} alt="" />
            </div>

            
            <div className="relative z-10 flex items-center justify-center h-[30rem]">
                <div className="bg-white bg-opacity-80 p-16 inset-0 rounded-lg shadow-2xl text-center">
                    <h1 className="text-2xl font-bold text-black mb-2">Up to 50% Off Combos</h1>
                    <p className="text-lg font-medium text-black">Buy in COMBOS and SAVE</p>
                </div>
            </div>
        </div>
    );
};



export default HanngerPage
