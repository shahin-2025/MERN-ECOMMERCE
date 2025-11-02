import React from 'react'
import { VscSend } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn  } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const FooterSection = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer-main">
                {/* Exclusive */}
                <div className="footer-item exclusive">
                    <h1 className='headding'>Exclusive</h1>
                    <h4 className='title'>Subscribe</h4>
                    <p className='decs'>Get 10% off your first order</p>
                    <div className="input-box" >
                        <input className='input' placeholder='Enter your email' type="text" />
                        <span className='icon'><VscSend/></span>
                    </div>
                </div>
                <div className="footer-item support">
                    <h4 className='title'>Support</h4>
                    <span className='decs'>111 Bijoy sarani, Dhaka,  DH 1515,Bangladesh.</span>
                    <span className='decs'>exclusive@gmail.com</span>
                    <span className='decs'>+88015-88888-9999</span>
                </div>
                <div className="footer-item account">
                    <h4 className='title'>Account</h4>
                    <div className="footer-link">
                        <Link to="/" className='decs'>My Account</Link>
                        <Link to="/" className='decs'>Login / Register</Link>
                        <Link to="/" className='decs'>Cart</Link>
                        <Link to="/" className='decs'>Wishlist</Link>
                        <Link to="/" className='decs'>Shop</Link>
                    </div>
                </div>
                <div className="footer-item quick-link">
                    <h4 className='title'>Quick Link</h4>
                    <div className="footer-quick-link">
                        <Link to="/" className='decs'>Privacy Policy</Link>
                        <Link to="/" className='decs'>Terms Of Use</Link>
                        <Link to="/" className='decs'>FAQ</Link>
                        <Link to="/" className='decs'>Contact</Link>
                    </div>
                </div>
                <div className="footer-item download">
                    <h4 className='title'>Download App</h4>
                    <div className="download-info">
                        <span className='d-decs'>Save $3 with App New User Only</span>
                        <div className="app-info">
                            <div className="qrcode">
                                <img src="http://localhost:5173/src/assets/appInfo/qrcode.png" alt="QR-code" />
                            </div>
                            <div className="play-store">
                                <Link to={"/"}>
                                    <img src="http://localhost:5173/src/assets/appInfo/googlestore.png" alt="" />
                                </Link>
                                <Link to={"/"}>
                                    <img src="http://localhost:5173/src/assets/appInfo/appstore.png" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="socail-icons">
                            <Link to="/"><FaFacebookF/></Link>
                            <Link to="/"><CiTwitter/></Link>
                            <Link to="/"><FaInstagram/></Link>
                            <Link to="/"><FaLinkedinIn /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copywrite">
                <span> &copy; Copyright Sahin 2025. All right reserved</span>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection