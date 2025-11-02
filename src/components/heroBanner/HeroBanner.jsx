import React from 'react'
import { Link } from 'react-router-dom'
import BannerSlider from '../bannerSlider/BannerSlider'

const HeroBanner = () => {
  return (
    <div className='hero-banner-main'>
        {/* <div className='banner-card'>
            <div className='banner-text'>
                <div className='brand-image'>
                    <img src="http://localhost:5173/src/assets/brand/brand.png" alt="" />
                </div>
                <div className="brand-text">
                    <h1>Up to 10% off Voucher</h1>
                    <Link to={"/"}  style={{ textDecoration: 'underline', marginLeft: '5px' }}>Shop Now</Link>
                </div>
            </div>
            <div className="banner-image">
                <img src="http://localhost:5173/src/assets/banner/banner.png" alt="banner Title" />
            </div>
            
        </div> */}
        <div className='slider-wrapper'>
            <BannerSlider/>
        </div>
    </div>
  )
}

export default HeroBanner