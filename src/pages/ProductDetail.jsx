import React from 'react'
import Header from '../components/Header'
import Product from '../components/Product'

const ProductDetail = ({handleCart}) => {
  return (
    <div>
        <Product handleCart={handleCart}/>
    </div>
  )
}

export default ProductDetail