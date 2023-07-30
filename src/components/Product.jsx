import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./product.scss"
import loading from "../img/Loading_icon.gif";

const Product = ({handleCart}) => {
    const [item, setItem] = useState([])
    const [mainImages, setMainImages] = useState([])
    const [showMainImage, setShowMainImage] = useState(true);
    const {productId} = useParams(); 
  
    const getProduct = async() => {
         const response = await axios.get(`https://dummyjson.com/products/${productId}`);
        setItem(response.data)
        
    }

    useEffect(() => {
        getProduct();
    }, [productId])
   
    console.log(mainImages);
    
        return (
        
          <div>
            {Object.keys(item).length === 0 ? (
            <div className='loading'><img src={loading} alt="" /></div>
          ):(
  
            <div className='product-item'>
              <div className='p-images'>
              {item.images.map((i) => {
                return(
                  <div>
                  <div className='p-image'>
                    <img src={i} alt="" 
                    onClick={() => setMainImages(i)}
                    />
                  </div>
                  <div className='popup-image'>
                    <span onClick={() => setShowMainImage(false)}>close</span>
                    <img src={mainImages} alt="" />
                  </div>
                  </div>
                  
                )
              })}
              </div>
             
              <br/>
              <div className='details'>
              <p>{item.brand}</p>
              <br/>
              <h1>{item.title}</h1>
              <br/>
              <p>${item.price}</p>
              <br/>
              <p>{item.description}</p>
              <br/>
              <button onClick={() => handleCart(item)}>Add To Cart</button>
            </div>
            </div>
          )}
            
              
          </div>
        ) 
      
      
    

}

export default Product