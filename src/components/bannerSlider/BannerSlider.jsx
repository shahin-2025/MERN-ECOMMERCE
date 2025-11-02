import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const BannerSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
   
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
            <div className='banner-card'>
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
            
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='banner-card'>
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
            
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='banner-card'>
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
            
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='banner-card'>
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
            
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='banner-card'>
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
            
        </div>
        </SwiperSlide>
        
      </Swiper>
    </>)
}

export default BannerSlider