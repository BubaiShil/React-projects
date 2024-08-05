import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white font-semibold text-lg">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    <div className="flex-shrink-0 mb-4 md:mb-0">
                        <img src={assets.logo} alt="" />
                    </div>

                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="#home" className="text-gray-300 hover:text-white">
                            Home
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-white">
                            About
                        </a>
                        <a href="#services" className="text-gray-300 hover:text-white">
                            Services
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-white">
                            Contact
                        </a>
                    </div>


                    <div className='flex space-x-6'>
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.facebook_icon} alt="" />

                    </div>

                </div>
                <div className="mt-8 border-t border-gray-400 pt-8 text-center">
                    <p>© 2024 tamato Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
