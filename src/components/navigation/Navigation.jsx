import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Navigation = () => {
  return (
    <div className='container header-main'>
        <div className='logo-nav-box'>
            <div className="logo-box">
                <h1>Exclusive</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">SignUp</Link></li>
                    
                </ul>
            </nav>
        </div>

        <div className="header-info-box">
                <div className='input-wrapper'>
                    <input type="text" placeholder='What are you looking for?' />
                    <span><CiSearch/></span>
                </div>
                <div className='icon-box'>
                    <span><MdFavoriteBorder/></span>
                    <span><FiShoppingCart/></span>
                </div>
            </div>
    </div>
  )
}

export default Navigation