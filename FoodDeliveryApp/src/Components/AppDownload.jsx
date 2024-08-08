import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className="w-full my-10 p-6 rounded-lg text-center">
      <p className="mb-4 text-3xl font-semibold">For a better experience, download <br /> Tomato App</p>
      <div className="flex justify-center space-x-4">
        <img src={assets.play_store} alt="Play Store" className="h-12 w-auto" />
        <img src={assets.app_store} alt="App Store" className="h-12 w-auto" />
      </div>
    </div>
  )
}

export default AppDownload
