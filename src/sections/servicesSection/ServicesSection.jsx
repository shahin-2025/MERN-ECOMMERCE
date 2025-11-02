import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";

const ServicesSection = () => {
  return (
    <section className='services-section'>
       <div className="container">
         <div className="services-section-main">
            <div className="services-item">
                <div className="services-icon">
                    <span className='icon'><TbTruckDelivery/></span>
                </div>
                <div className="services-text">
                    <h4 className="title">FREE AND FAST DELIVERY</h4>
                    <span className='decs'>Free delivery for all orders over $140</span>
                </div>
            </div>
            <div className="services-item">
                <div className="services-icon">
                    <span className='icon'><BiSupport/></span>
                </div>
                <div className="services-text">
                    <h4 className="title">24/7 CUSTOMER SERVICE</h4>
                    <span className='decs'>Friendly 24/7 customer support</span>
                </div>
            </div>
            <div className="services-item">
                <div className="services-icon">
                    <span className='icon'><MdOutlineSecurity/></span>
                </div>
                <div className="services-text">
                    <h4 className="title">MONEY BACK GUARANTEE</h4>
                    <span className='decs'>We reurn money within 30 days</span>
                </div>
            </div>
            
        </div>
       </div>
    </section>
  )
}

export default ServicesSection