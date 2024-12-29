import React, { useContext } from 'react'
import { contextData } from '../../services/Context'
import { Link } from 'react-router-dom'
import { bannersPath, basePath, dashboardPath, ordersPath, productPath } from '../../utils/Constants'
import logo from '/AGI-LOGO.png'

const Sidebar = () => {
  const { sidebr, toggleSidebar } = useContext(contextData)

  // Function to handle sidebar toggle and close when a menu item is clicked
  const handleMenuClick = () => {
    if (sidebr) {
      toggleSidebar(); // Close the sidebar if it's open
    }
  }

  return (
    <>
      <nav className={`pc-sidebar ${sidebr ? "mob-sidebar-active" : "pc-sidebar-hide mob-sidebar-active"}`}>
        <div className="navbar-wrapper">
          <div className="m-header">
            <Link to={basePath} className="b-brand text-primary">
              <img style={{ width: '100px', height: '25px' }} src='https://admin.autogridnumberplate.com/AGI-LOGO.png' alt="logo image" className="logo-lg" />
            </Link>
            <h5 onClick={() => toggleSidebar()} style={{ marginLeft: "180px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </h5>
          </div>
          <div className="navbar-content">
            <ul className="pc-navbar">
              <li className="pc-item pc-hasmenu">
                <Link to={basePath} className="pc-link" onClick={handleMenuClick}>
                  <span className="pc-micon">
                    <i className="ph-duotone ph-gauge" />
                  </span>
                  <span className="pc-mtext">Dashboard</span>
                </Link>
              </li>

              <li className="pc-item pc-hasmenu">
                <Link to={productPath} className="pc-link" onClick={handleMenuClick}>
                  <span className="pc-micon">
                    <i className="ph-duotone ph-shopping-cart" />
                  </span>
                  <span className="pc-mtext">Products</span>
                  <span className="pc-arrow"><i data-feather="chevron-right" /></span>
                </Link>
              </li>

              <li className="pc-item pc-hasmenu">
                <Link to={ordersPath} className="pc-link" onClick={handleMenuClick}>
                  <span className="pc-micon">
                    <i className="ph-duotone ph-shopping-bag" />
                  </span>
                  <span className="pc-mtext">Orders</span>
                  <span className="pc-arrow"><i data-feather="chevron-right" /></span>
                </Link>
              </li>
              <li className="pc-item pc-hasmenu">
                <Link to={bannersPath} className="pc-link" onClick={handleMenuClick}>
                  <span className="pc-micon">
                  <i className="ph-duotone ph-rocket" />
                  </span>
                  <span className="pc-mtext">Banners</span>
                  <span className="pc-arrow"><i data-feather="chevron-right" /></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar
