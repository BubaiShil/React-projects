import React, { useState } from 'react';

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
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 via-white to-gray-100 p-10 py-24 rounded-lg shadow-xl mt-12 text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
        Join the Swag Gangsters
      </h2>
      <p className="text-lg text-gray-500 mb-6">
        Get spoiled with exclusive fashionables and loot awesome goodies.
      </p>
      <form onSubmit={handleSubmit} className="w-96">
        <div className="relative mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-4 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-black transition-all duration-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-all duration-300"
        >
          Join Now
        </button>
      </form>

      <div className="mt-8 text-xl text-gray-400">
        By joining, you agree to receive updates and exclusive offers.
      </div>

      <div className="flex items-center justify-center space-x-3 mt-10">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-extrabold text-gray-700">Free Goodies</h3>
          <p className="text-lg text-gray-500">Get exclusive swag when you join.</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-extrabold text-gray-700">Weekly Updates</h3>
          <p className="text-lg text-gray-500">Stay updated on the latest trends.</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-extrabold text-gray-700">VIP Access</h3>
          <p className="text-lg text-gray-500">Get early access to new collections.</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectPart;
