import React, {  useContext, useState } from 'react'
import { contextData } from '../../services/Context'
import { Link } from 'react-router-dom'
import {  productPath } from '../../utils/Constants'

const Sidebar = () => {
  const { sidebr, toggleSidebar } = useContext(contextData)
  

  return (
    <>
    
    
    <nav className={`pc-sidebar ${sidebr ? 'pc-sidebar-hide mob-sidebar-active' : ''}`}>
    <div className="navbar-wrapper">
      <div className="m-header">
        <a href="index.html" className="b-brand text-primary">
          <img style={{width:'100px',height:'25px'}}  src="/assets/images/AGI.png" alt="logo image" className="logo-lg" />
        </a>
        <h5 onClick={toggleSidebar} style={{ marginLeft: '95px' }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </h5>
      </div>
      <div className="navbar-content">
        <ul className="pc-navbar">
         
          <li className="pc-item pc-hasmenu">
            <Link className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-gauge" />
              </span>
              <span className="pc-mtext">Dashboard</span>
             
            </Link>
          
          </li>
    
        
          <li className="pc-item pc-hasmenu">
            <Link  to={productPath} className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-shopping-cart" />
              </span>
              <span className="pc-mtext">Products</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></Link>
         
          </li>
        
        
         
      
    
         
         
        
      
     
         
         
        
        
      
           

         
        </ul>
     
      </div>
      <div className="card pc-user-card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img src="../assets/images/user/avatar-1.jpg" alt="user-image" className="user-avtar wid-45 rounded-circle" />
            </div>
            <div className="flex-grow-1 ms-3">
              <div className="dropdown">
                <a href="#" className="arrow-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,20">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 me-2">
                      <h6 className="mb-0">Jonh Smith</h6>
                      <small>Administrator</small>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="btn btn-icon btn-link-secondary avtar">
                        <i className="ph-duotone ph-windows-logo" />
                      </div>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      <a className="pc-user-links">
                        <i className="ph-duotone ph-user" />
                        <span>My Account</span>
                      </a>
                    </li>
                    <li>
                      <a className="pc-user-links">
                        <i className="ph-duotone ph-gear" />
                        <span>Settings</span>
                      </a>
                    </li>
                    <li>
                      <a className="pc-user-links">
                        <i className="ph-duotone ph-lock-key" />
                        <span>Lock Screen</span>
                      </a>
                    </li>
                    <li>
                      <a className="pc-user-links">
                        <i className="ph-duotone ph-power" />
                        <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

    </>
  )
}

export default Sidebar