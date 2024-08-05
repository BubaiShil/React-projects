import React from 'react'
import Header from '../Components/Header'
import MenuItems from '../Components/MenuItems'
import FoodDisplay from '../Components/FoodDisplay'
import AppDownload from "../Components/AppDownload"

const Home = () => {
  return (
    <div>
      <Header />
      <MenuItems />
      <FoodDisplay />
      <AppDownload/>
    </div>
  )
}

export default Home
