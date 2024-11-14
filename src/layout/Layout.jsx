import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
    <div>
        <div className="loader-bg">
            <div className="loader-track">
            <div className="loader-fill" />            
            </div>
        </div>
        <Sidebar />
        <Header />
        <div className="pc-container">
            <div className="pc-content">

                <Outlet />

            </div>
        </div>

        <Footer />
    </div>

    </>
  )
}

export default Layout