import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Hero.scss'
import { Link } from 'react-router-dom';

const Hero = ({ handleCart}) => {
   const [product, setProduct] = useState([]);
 
   
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/?limit=8`)
        .then((response) => {
            setProduct(response.data.products);
            console.log(response.data);
        })
    }, [])
   
  return (
    <div className='products'>
        {
            product.map((item) => { 
                return(
                        <div key={item.id} className='product'>
                            <Link to={'/product/'+ item.id}>
                        <img src={item.images[0]} alt="" />
                        <p>{item.brand}</p>
                        <h2>{item.title}</h2>
                        <p>${item.price}</p>
                        </Link>
                        
                        <button className='button' onClick={() => handleCart(item)}>Add To Cart</button>
                        
                        </div>
                    
                )
            })
        }
    </div>
  )
}

export default Hero