import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast'
import { contextData } from '../services/Context'

const Layout = () => {
  const { closeSidebar } = useContext(contextData);
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
        <div onClick={closeSidebar} className="pc-container">
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