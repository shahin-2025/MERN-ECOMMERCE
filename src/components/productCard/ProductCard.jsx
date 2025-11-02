import React from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className='product-card-main'>
        <div className="product-image">
            <span className='offer'>40%</span>
            <img src="http://localhost:5173/src/assets/products/01.png" alt="product title" />
            <div className='actions'>
                <span className='whiteList'><MdOutlineFavoriteBorder/></span>
                <span className='addCart'><BsCartPlus/></span>
            </div>
        </div>
        <div className="product-details">
            <h4 className='product-title'>The north coat</h4>
            <div className='price'>
                <span className="new">$260</span>
                <span className="old">$360</span>
            </div>
            <div className="ratings">
                <div className="stars">
                    <span className="star-item"><FaStar/></span>
                    <span className="star-item"><FaStar/></span>
                    <span className="star-item"><FaStar/></span>
                    <span className="star-item"><FaStar/></span>
                    <span className="star-item"><FaStar/></span>
                </div>
                <span className="rating-count">
                    (28)
                </span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard