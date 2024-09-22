import React from 'react'
import { useState } from 'react';

const ConnectPart = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      console.log('Email submitted:', email);
    };
  
    return (
      <div className="flex flex-col justify-center items-center bg-gray-200 p-8 py-24 rounded-lg shadow-lg mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Swag Gangsters</h2>
        <p className="text-gray-600 mb-6">
          Get spoiled with more fashionables, and loot awesome goodies.
        </p>
        <form onSubmit={handleSubmit} className='w-80 '>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Join Now
          </button>
        </form>
      </div>
    );
}

export default ConnectPart
