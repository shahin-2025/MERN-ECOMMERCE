import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ThemeButton from '../../components/themeButton/ThemeButton'
import ProductCard from '../../components/productCard/ProductCard'

const BestSaleProducts = () => {
  return (
    <section>
      <div className="container">
        <div className="best-sale-main">
          <div className="best-sale-header">
            <div className='best-sales-title'>
              <span className='today-baged'></span>
              <span className='today-text'>This Month</span>
            </div>
            <div className='best-heading-container'>
                <div className='best-sales-heading'>
                  <h1>Best Selling Products</h1>
                </div>
                <div>
                  <ThemeButton text={"view All"} url={"/best/all"}/>
                </div>
            </div>
          </div>
          <div className='best-sales-product-wrapper'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSaleProducts