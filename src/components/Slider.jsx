import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./slider.scss"
import larrow from "../img/l-arrow.png"
import rarrow from "../img/r-arrow.png"
import { Link } from 'react-router-dom';

const Slider = () => {
    const [product, setProduct] = useState([]);
    

    const slideLeft = () => {
        var left = document.querySelector('.products-slider');
        left.scrollLeft = left.scrollLeft -500

    }
    const slideRight = () => {
        var right = document.querySelector('.products-slider');
        right.scrollLeft = right.scrollLeft +500

    }

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/?limit=10`)
        .then((response) => {
            setProduct(response.data.products);
        })
    }, [])
  return (
    <div className='slider'>
     <img className='left' onClick={slideLeft} src={larrow} alt='' />
    <div className='products-slider'>
        
        {
            product.map((item) => {
                return (
                    <div key={item.id} className='product-slider'>
                        <Link to={'/product/' + item.id}>
                        <img src={item.images[0]} alt="product image" />
                        </Link>

                    </div>
                )
            })
        }
        
     
    </div>
    <img className='right' onClick={slideRight} src={rarrow} alt='' />
  
    </div>
  )
}

export default Slider