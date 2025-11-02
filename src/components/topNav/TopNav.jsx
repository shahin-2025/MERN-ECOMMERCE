import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";

const TopNav = () => {
  return (
    <div className='top-nav'>
      <div className='summer-sale'>
        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
        <Link to={"/"}  style={{ textDecoration: 'underline', marginLeft: '5px' }}>Shop Now</Link>
      </div>
      <div className='language-box'>
        <span>English</span>
        <IoIosArrowDown/>
      </div>
    </div>
  )
}

export default TopNav