import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: color}} >
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div className="bg-red-500 text-white py-4 px-6 rounded-lg text-center cursor-pointer hover:bg-red-600 transition duration-300" onClick={()=>{setColor("red")}}>
          Red
        </div>
        <div className="bg-blue-500 text-white py-4 px-6 rounded-lg text-center cursor-pointer hover:bg-blue-600 transition duration-300" onClick={()=>{setColor("blue")}}>
          Blue
        </div>
        <div className="bg-green-500 text-white py-4 px-6 rounded-lg text-center cursor-pointer hover:bg-green-600 transition duration-300" onClick={()=>{setColor("green")}}>
          Green
        </div>
        <div className="bg-yellow-500 text-white py-4 px-6 rounded-lg text-center cursor-pointer hover:bg-yellow-600 transition duration-300" onClick={()=>{setColor("yellow")}}>
          Yellow
        </div>
        <div className="bg-purple-500 text-white py-4 px-6 rounded-lg text-center cursor-pointer hover:bg-purple-600 transition duration-300" onClick={()=>{setColor("purple")}}>
          Purple
        </div>
        <div className="bg-pink-500 text-white py-4 px-6 rounded-lg text-center cursor-pointer hover:bg-pink-600 transition duration-300" onClick={()=>{setColor("pink")}}>
          Pink
        </div>
      </div>
    </div>
  )
}

export default App
