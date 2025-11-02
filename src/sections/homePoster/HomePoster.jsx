import React from 'react'
import { Link } from 'react-router-dom'

const HomePoster = () => {
  return (
    <section className='poster-section'>
        <div className="container">
            <div className="poster-main">
                <div className="poster-info-box">
                    <span className="category">Categories</span>
                    <h1 className='title'>Enhance Your Music Experience</h1>
                    <div className="timer-box">
                        <div className="timer-item">
                            <span className='time'>05</span>
                            <span className='text'>Days</span>
                        </div>
                        <div className="timer-item">
                            <span className='time'>23</span>
                            <span className='text'>Hours</span>
                        </div>
                        <div className="timer-item">
                            <span className='time'>59</span>
                            <span className='text'>Minutes</span>
                        </div>
                        <div className="timer-item">
                            <span className='time'>35</span>
                            <span className='text'>Seconds</span>
                        </div>
                    </div>
                    <Link className='poster-button' to="/">Buy Now</Link>
                </div>
                <div className="poster-image-box">
                    <img src="http://localhost:5173/src/assets/poster/JBLposter.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomePoster