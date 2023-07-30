import React, { useState } from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import cartImg from "../img/cart.png"


const Header = ({size}) => {

  
  return (
    <div className='header'>
        <Link to="/">
        <div className="logo"><h1>E-Commerce</h1></div>
        </Link>
        <div className="menu">
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
                
            </ul>
        </div>
        <Link to={'/cart'}>
        <div className='cart'>
          <img src={cartImg} alt=""/>
          <h3>{size}</h3>
         
        </div>
        </Link>
    </div>
  )
}

export default Header