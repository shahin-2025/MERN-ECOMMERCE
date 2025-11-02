import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const FeaturedSection = () => {
  return (
    <section className='featured-section'>
        <div className="container">
            <div className="featured-main">
                <div className="featured-section-header">
                    <div className='featured-section-title'>
                        <span className='today-baged'></span>
                        <span className='today-text'>Featured</span>
                    </div>
                    <div className='featured-section-heading-container'>
                        <div className='featured-section-heading'>
                            <h1>New Arrival</h1>
                        </div>
                    </div>
                </div>
                <div className="featured-items-box">
                    <div className="featured-left">
                        <div className="image-box">
                            <img src="http://localhost:5173/src/assets/featured/01.png" alt="title" />
                        </div>
                        <div className="text-box">
                            <h1 className='title'>PlayStation 5</h1>
                            <span className='decscription'>Black and White version of the PS5 coming out on sale.</span>
                            <Link className='button' to="/">Shop Now</Link>
                        </div>
                    </div>
                    <div className="featured-right">
                        <div className='right-banner'>
                            <div className="image-box">
                                <img src="http://localhost:5173/src/assets/featured/02.png" alt="title" />
                            </div>
                            <div className="text-box">
                                <h1 className='title'>Women’s Collections</h1>
                                <span className='decscription'>Featured woman collections that give you another vibe.</span>
                                <Link className='button' to="/">Shop Now</Link>
                            </div>
                        </div>
                        <div className="right-bottom">
                            <div className='right-bottom-item'>
                                <div className="image-box">
                                <img src="http://localhost:5173/src/assets/featured/03.png" alt="title" />
                                </div>
                                <div className="text-box">
                                    <h1 className='title'>Perfume</h1>
                                    <span className='decscription'>GUCCI INTENSE OUD EDP</span>
                                    <Link className='button' to="/">Shop Now</Link>
                                </div>
                            </div>
                            <div className='right-bottom-item'>
                                <div className="image-box">
                                <img src="http://localhost:5173/src/assets/featured/04.png" alt="title" />
                                </div>
                                <div className="text-box">
                                    <h1 className='title'>Speakers</h1>
                                    <span className='decscription'>Amazon wireless speakers</span>
                                    <Link className='button' to="/">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturedSection