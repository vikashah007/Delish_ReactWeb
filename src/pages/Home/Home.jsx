import React, { useState } from 'react'
import "./Home.css"
import Header from '../../component/Header/Header.jsx'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu.jsx'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay.jsx'
import AppDownload from '../../component/AppDownload/AppDownload.jsx'
const Home = () => {
    const [category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
