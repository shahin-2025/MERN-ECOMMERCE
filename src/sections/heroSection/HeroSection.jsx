import React from 'react'
import HeroCategory from '../../components/heroCategory/HeroCategory'
import HeroBanner from '../../components/heroBanner/HeroBanner'

const HeroSection = () => {
  return (
    <section className='hero-section'>
        <div className="container">
            <div className='hero-main'>
                <HeroCategory/>
                <HeroBanner/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection