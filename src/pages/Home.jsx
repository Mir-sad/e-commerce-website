import React, { useState } from 'react'
import Hero from '../components/Hero'
import FirstSector from '../components/FirstSector'
import Boxes from '../components/Boxes'
import Slider from '../components/Slider'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = ({handleCart, size}) => {
  
  
    
  return (
    <div>
      
        <FirstSector />
        <Slider />
      <Boxes />
      <Hero handleCart={handleCart} size = {size}/>
      <Footer />
    </div>
  )
}

export default Home