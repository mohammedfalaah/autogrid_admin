import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { contextData } from '../../services/Context';

const Header = () => {
  const { setUser } = useContext(contextData);
  let navigate = useNavigate();
  const logoutHandler = () => {
    window.localStorage.clear()
    setUser(null);
    return navigate("/login")
  }

  const { sidebr, toggleSidebar } = useContext(contextData)


  return (
    <>
      <header className="pc-header">
        <div className="header-wrapper"> {/* [Mobile Media Block] start */}
          <div className="me-auto pc-mob-drp">
            <ul className="list-unstyled">
              {/* ======= Menu collapse Icon ===== */}
              <li onClick={() => toggleSidebar()} className="pc-h-item pc-sidebar-collapse">
                <a className="pc-head-link ms-0" id="sidebar-hide">
                  <i className="ti ti-menu-2" />
                </a>
              </li>
              <li onClick={() => toggleSidebar()} className="pc-h-item pc-sidebar-popup">
                <a href="#" className="pc-head-link ms-0" id="mobile-collapse">
                  <i className="ti ti-menu-2" />
                </a>
              </li>
              <li className="dropdown pc-h-item d-inline-flex d-md-none">
                <a className="pc-head-link dropdown-toggle arrow-none m-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                  <i className="ph-duotone ph-magnifying-glass" />
                </a>
                <div className="dropdown-menu pc-h-dropdown drp-search">
                  <form className="px-3">
                    <div className="mb-0 d-flex align-items-center">
                      <input type="search" className="form-control border-0 shadow-none" placeholder="Search..." />
                      <button className="btn btn-light-secondary btn-search">Search</button>
                    </div>
                  </form>
                </div>
              </li>
              <li className="pc-h-item d-none d-md-inline-flex">

              </li>
            </ul>
          </div>
          {/* [Mobile Media Block end] */}
          <div className="ms-auto">
            <ul className="list-unstyled">





              <li className="dropdown pc-h-item header-user-profile">
                <a onClick={logoutHandler} className="pc-head-link dropdown-toggle arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" data-bs-auto-close="outside" aria-expanded="false">
                  Logout            </a>

              </li>
            </ul>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header