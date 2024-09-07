import React from 'react'
import { FaInstagram   } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 borde px-12 mt-10 h-[70vh]">
            <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 gap-3 mt-14">
                
                <div className="flex flex-col items-center justify-center md:col-span-1">
                    
                    <div className="w-24 h-24 bg-gray-700 rounded-full  flex items-center justify-center">
                        <h1 className='font-["Porlane"] text-7xl '>ShopyOnWay</h1>
                    </div>
                    <div className='flex justify-center items-center mt-6 text-2xl gap-3'>
                        <FaInstagram className='text-pink-500'/>
                        <FaSquareXTwitter className='text-gray-600'/>
                        <FaFacebook className='text-blue-600'/>
                    </div>
                </div>

                
                <div className="md:col-span-2 space-y-4 ">
                    <h2 className="text-xl font-bold">Let's go!</h2>
                    <p className='w-[50%]'>Join the ShopyOnWay! Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <form className="space-y-2 w-[70%]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                
                <div className="space-y-4 md:col-span-1 -ml-16">
                    <h2 className="text-xl font-bold">Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-400">Terms and Conditions</a></li>
                        <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-gray-400">Return Policy</a></li>
                    </ul>
                </div>

                
                <div className="space-y-4 md:col-span-1">
                    <h2 className="text-xl font-bold">Footer Menu</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-400">Contact us</a></li>
                        <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-400">Shipping Policy</a></li>
                        <li><a href="#" className="hover:text-gray-400">Return Request</a></li>
                        <li><a href="#" className="hover:text-gray-400">Return and Exchange Policy</a></li>
                        <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            
            <div className="mt-28 text-center text-gray-500">
                © {new Date().getFullYear()} ShopyOnWay. All rights reserved.
            </div>
        </footer>
    );
};




export default Footer
