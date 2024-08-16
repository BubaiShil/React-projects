import React from 'react'
import Navbar from './Navbar'
import Albums from './Albums'
import {albumsData} from "../assets/assets"

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className='my-5'>
        <h1 className='text-2xl font-bold my-4'>Featured Albums</h1>
        <div className='flex overflow-auto gap-3 scrollbar-hide'>
        {albumsData.map((e,index)=> (<Albums name={e.name} description={e.desc} key={index} image={e.image}/>))}
        </div>
      </div>
    </>
  )
}

export default Home
