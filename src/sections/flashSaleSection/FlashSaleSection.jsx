import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ProductCard from '../../components/productCard/ProductCard'
import ThemeButton from '../../components/themeButton/ThemeButton'

const FlashSaleSection = () => {
  return (
    <section className="flash-sales-section">
        <div className="container">
          <div className="flash-sales-main">
            <div className="flesh-sales-header">
              <div className='flash-sales-title'>
                <span className='today-baged'></span>
                <span className='today-text'>Today’s</span>
              </div>
              <div className='flash-heading-container'>
                <div className='flash-sales-heading'>
                  <h1>Flash Sales</h1>
                  <div className='flash-sales-clock'>
                      <div className='clock-item'>
                        <span className='title'>Days</span>
                        <h1 className='time'>03</h1>
                      </div>
                      <span className='divider'>:</span>
                      <div className='clock-item'>
                        <span className='title'>Hours</span>
                        <h1 className='time'>23</h1>
                      </div>
                      <span className='divider'>:</span>
                      <div className='clock-item'>
                        <span className='title'>Minutes</span>
                        <h1 className='time'>19</h1>
                      </div>
                      <span className='divider'>:</span>
                       <div className='clock-item'>
                        <span className='title'>Seconds</span>
                        <h1 className='time'>56</h1>
                      </div>
                  </div>
                </div>
                <div className='slide-navigation-wrapper'>
                  <span className='slide-navi-icon'><IoIosArrowBack/></span>
                  <span className='slide-navi-icon'><IoIosArrowForward/></span>
                </div>
              </div>
            </div>
            <div className='flash-sale-slider'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <div className='theme-button-wrapper'>
              <ThemeButton text={"view All Product"} url={"/products/all"}/>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FlashSaleSection