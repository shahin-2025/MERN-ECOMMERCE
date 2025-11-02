import React from 'react'
import ThemeButton from '../../components/themeButton/ThemeButton'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { CiCamera } from "react-icons/ci";

const CategorySection = () => {
  return (
    <section className='category-section'>
        <div className="container">
            <div className="category-section-main">
               <div className="category-section-header">
                  <div className='category-section-title'>
                    <span className='today-baged'></span>
                    <span className='today-text'>Categories</span>
                  </div>
                  <div className='category-section-heading-container'>
                      <div className='category-section-heading'>
                        <h1>Browse By Category</h1>
                      </div>
                      <div className='slide-navigation-wrapper'>
                        <span className='slide-navi-icon'><IoIosArrowBack/></span>
                        <span className='slide-navi-icon'><IoIosArrowForward/></span>
                      </div>
                  </div>
              </div>
              <div className="category-items-wrapper">
                <div className="category-item">
                  <img src={'http://localhost:5173/src/assets/category/CellPhone.png'} alt="" />
                  <h4 className="name">Phones</h4>
                </div>
                <div className="category-item">
                  <img src={'http://localhost:5173/src/assets/category/Computer.png'} alt="" />
                  <h4 className="name">Computers</h4>
                </div>
                <div className="category-item">
                  <img src={'http://localhost:5173/src/assets/category/SmartWatch.png'} alt="" />
                  <h4 className="name">SmartWatch</h4>
                </div>
                <div className="category-item">
                  {/* <img src={'http://localhost:5173/src/assets/category/Camera.png'} alt="" /> */}
                 <span className='icon'> <CiCamera/></span>
                  <h4 className="name">Camera</h4>
                </div>
                <div className="category-item">
                  <img src={'http://localhost:5173/src/assets/category/Headphone.png'} alt="" />
                  <h4 className="name">HeadPhones</h4>
                </div>
                <div className="category-item">
                  <img src={'http://localhost:5173/src/assets/category/Gamepad.png'} alt="" />
                  <h4 className="name">Gaming</h4>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default CategorySection