import React, { useEffect, useState } from 'react'
import "./cart.scss"

const Cart = ({cart, setCart, handleCart}) => {
  const [price, setPrice] = useState(0)
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !==id);
    setCart(arr);
  }


  return (
    <div className='cart'>
      
      {
        
        cart.map((item) => (
          Object.keys(item).length === 0? (
            <div>...Loading</div>
          ):(
            <div className='cart-items'>
            <div className='cart-item' key={item.id}>
              <img src={item.images[0]} alt="" />
              <div className="txt">
              <h1>{item.title}</h1>
              <p>$<strong>{item.price}</strong> </p>
              <button onClick={() => handleRemove(item.id)}>Remove item</button>
              </div>
              
            </div>
            
          </div>
          )
        ))
      }
    </div>
  )
}

export default Cart
