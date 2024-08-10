import React from 'react'
import { assets } from "../assets/assets"

const Header = () => {
    return (
        <div className="flex flex-wrap pt-8 mb-5 justify-center">
            <div className="relative w-full max-w-screen-xl mx-auto">
                <img 
                    className="w-full h-auto object-cover" 
                    src={assets.header_img} 
                    alt="Header" 
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12 lg:p-16 text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">Welcome to Foodie Express!</h1>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-medium">Delicious meals delivered straight to your door</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;


// const Header = () => {
//     return (
//         <div className='flex flex-wrap pt-8 '>
//             <div className='flex ml-32 mr-32 relative'>
//             <img className='bg-cover bg-no-repeat ' src={assets.header_img} alt="" />
           
//             <div className='absolute flex flex-col text-start mt-72 p-3 font-medium text-white  '>
//                 <h1 className='text-8xl'>hi welcome!</h1>
//                 <h3>its my website</h3>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default Header
