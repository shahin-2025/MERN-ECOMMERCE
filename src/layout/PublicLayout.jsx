import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import FooterSection from '../components/footer/FooterSection'

const PublicLayout = () => {
  return (
    <div>
        <Header/>
        <div>
            <Outlet/>
        </div>
       <FooterSection/>
        {/* footer  */}
    </div>
  )
}

export default PublicLayout