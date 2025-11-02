import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ProductCard from '../../components/productCard/ProductCard'
import ThemeButton from '../../components/themeButton/ThemeButton'

const OurProductSection = () => {
  return (
    <section className='our-proudct-section'>
        <div className="container">
            <div className="our-product-section-main">
                <div className="our-product-section-header">
                    <div className='our-product-section-title'>
                        <span className='today-baged'></span>
                        <span className='today-text'>Our Products</span>
                    </div>
                    <div className='our-product-section-heading-container'>
                        <div className='our-product-section-heading'>
                            <h1>Explore Our Products</h1>
                        </div>
                        <div className='slide-navigation-wrapper'>
                            <span className='slide-navi-icon'><IoIosArrowBack/></span>
                            <span className='slide-navi-icon'><IoIosArrowForward/></span>
                        </div>
                    </div>
                </div>
                <div className="product-box">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
                <div className='theme-btn-box'>
                    <ThemeButton text={"View All Products"} url={"/"}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurProductSection