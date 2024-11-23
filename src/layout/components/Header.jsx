import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  let navigate = useNavigate();
  const logoutHandler = () => {
    window.localStorage.clear()
    return navigate("/login")
  }
  return (
    <>
     <header className="pc-header">
    <div className="header-wrapper"> {/* [Mobile Media Block] start */}
      <div className="me-auto pc-mob-drp">
        <ul className="list-unstyled">
          {/* ======= Menu collapse Icon ===== */}
          <li className="pc-h-item pc-sidebar-collapse">
            <a href="#" className="pc-head-link ms-0" id="sidebar-hide">
              <i className="ti ti-menu-2" />
            </a>
          </li>
          <li className="pc-h-item pc-sidebar-popup">
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
            <form className="form-search">
              <i className="ph-duotone ph-magnifying-glass icon-search" />
              <input type="search" className="form-control" placeholder="Search..." />
              <button className="btn btn-search" style={{padding: 0}}><kbd>ctrl+k</kbd></button>
            </form>
          </li>
        </ul>
      </div>
      {/* [Mobile Media Block end] */}
      <div className="ms-auto">
        <ul className="list-unstyled">
          <li className="dropdown pc-h-item d-none d-md-inline-flex">
            <a className="pc-head-link dropdown-toggle arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
              <i className="ph-duotone ph-circles-four" />
            </a>
            <div className="dropdown-menu dropdown-qta dropdown-menu-end pc-h-dropdown">
              <div className="overflow-hidden">
                <div className="qta-links m-n1">
                  <a href="#!" className="dropdown-item">
                    <i className="ph-duotone ph-shopping-cart" />
                    <span>E-commerce</span>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <i className="ph-duotone ph-lifebuoy" />
                    <span>Helpdesk</span>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <i className="ph-duotone ph-scroll" />
                    <span>Invoice</span>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <i className="ph-duotone ph-books" />
                    <span>Online Courses</span>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <i className="ph-duotone ph-envelope-open" />
                    <span>Mail</span>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <i className="ph-duotone ph-identification-badge" />
                    <span>Membership</span>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <i className="ph-duotone ph-chats-circle" />
                    <span>Chat</span>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <i className="ph-duotone ph-currency-circle-dollar" />
                    <span>Plans</span>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <i className="ph-duotone ph-user-circle" />
                    <span>Users</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown pc-h-item">
            <a className="pc-head-link dropdown-toggle arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
              <i className="ph-duotone ph-sun-dim" />
            </a>
            <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
              <a href="#!" className="dropdown-item" onclick="layout_change('dark')">
                <i className="ph-duotone ph-moon" />
                <span>Dark</span>
              </a>
              <a href="#!" className="dropdown-item" onclick="layout_change('light')">
                <i className="ph-duotone ph-sun-dim" />
                <span>Light</span>
              </a>
              <a href="#!" className="dropdown-item" onclick="layout_change_default()">
                <i className="ph-duotone ph-cpu" />
                <span>Default</span>
              </a>
            </div>
          </li>
          <li className="pc-h-item">
            <a className="pc-head-link pct-c-btn" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_pc_layout">
              <i className="ph-duotone ph-gear-six" />
            </a>
          </li>
          <li className="dropdown pc-h-item">
            <a className="pc-head-link dropdown-toggle arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
              <i className="ph-duotone ph-diamonds-four" />
            </a>
            <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
              <a href="#!" className="dropdown-item">
                <i className="ph-duotone ph-user" />
                <span>My Account</span>
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ph-duotone ph-gear" />
                <span>Settings</span>
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ph-duotone ph-lifebuoy" />
                <span>Support</span>
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ph-duotone ph-lock-key" />
                <span>Lock Screen</span>
              </a>
              <a href="#!" className="dropdown-item">
                <i className="ph-duotone ph-power" />
                <span>Logout</span>
              </a>
            </div>
          </li>
          <li className="dropdown pc-h-item">
            <a className="pc-head-link dropdown-toggle arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
              <i className="ph-duotone ph-bell" />
              <span className="badge bg-success pc-h-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown">
              <div className="dropdown-header d-flex align-items-center justify-content-between">
                <h5 className="m-0">Notifications</h5>
                <ul className="list-inline ms-auto mb-0">
                  <li className="list-inline-item">
                    <a href="https://html.phoenixcoded.net/light-able/bootstrap/application/mail.html" className="avtar avtar-s btn-link-hover-primary">
                      <i className="ti ti-link f-18" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown-body text-wrap header-notification-scroll position-relative" style={{maxHeight: 'calc(100vh - 235px)'}}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <p className="text-span">Today</p>
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <img src="../assets/images/user/avatar-2.jpg" alt="user-image" className="user-avtar avtar avtar-s" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="d-flex">
                          <div className="flex-grow-1 me-3 position-relative">
                            <h6 className="mb-0 text-truncate">Keefe Bond added new tags to 💪 Design system</h6>
                          </div>
                          <div className="flex-shrink-0">
                            <span className="text-sm">2 min ago</span>
                          </div>
                        </div>
                        <p className="position-relative mt-1 mb-2"><br /><span className="text-truncate">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span></p>
                        <span className="badge bg-light-primary border border-primary me-1 mt-1">web design</span>
                        <span className="badge bg-light-warning border border-warning me-1 mt-1">Dashobard</span>
                        <span className="badge bg-light-success border border-success me-1 mt-1">Design System</span>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="avtar avtar-s bg-light-primary">
                          <i className="ph-duotone ph-chats-teardrop f-18" />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="d-flex">
                          <div className="flex-grow-1 me-3 position-relative">
                            <h6 className="mb-0 text-truncate">Message</h6>
                          </div>
                          <div className="flex-shrink-0">
                            <span className="text-sm">1 hour ago</span>
                          </div>
                        </div>
                        <p className="position-relative mt-1 mb-2"><br /><span className="text-truncate">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span></p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <p className="text-span">Yesterday</p>
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="avtar avtar-s bg-light-danger">
                          <i className="ph-duotone ph-user f-18" />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="d-flex">
                          <div className="flex-grow-1 me-3 position-relative">
                            <h6 className="mb-0 text-truncate">Challenge invitation</h6>
                          </div>
                          <div className="flex-shrink-0">
                            <span className="text-sm">12 hour ago</span>
                          </div>
                        </div>
                        <p className="position-relative mt-1 mb-2"><br /><span className="text-truncate"><strong> Jonny aber </strong> invites to join the challenge</span></p>
                        <button className="btn btn-sm rounded-pill btn-outline-secondary me-2">Decline</button>
                        <button className="btn btn-sm rounded-pill btn-primary">Accept</button>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="avtar avtar-s bg-light-info">
                          <i className="ph-duotone ph-notebook f-18" />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="d-flex">
                          <div className="flex-grow-1 me-3 position-relative">
                            <h6 className="mb-0 text-truncate">Forms</h6>
                          </div>
                          <div className="flex-shrink-0">
                            <span className="text-sm">2 hour ago</span>
                          </div>
                        </div>
                        <p className="position-relative mt-1 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                          dummy text ever since the 1500s.</p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <img src="../assets/images/user/avatar-2.jpg" alt="user-image" className="user-avtar avtar avtar-s" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="d-flex">
                          <div className="flex-grow-1 me-3 position-relative">
                            <h6 className="mb-0 text-truncate">Keefe Bond added new tags to 💪 Design system</h6>
                          </div>
                          <div className="flex-shrink-0">
                            <span className="text-sm">2 min ago</span>
                          </div>
                        </div>
                        <p className="position-relative mt-1 mb-2"><br /><span className="text-truncate">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span></p>
                        <button className="btn btn-sm rounded-pill btn-outline-secondary me-2">Decline</button>
                        <button className="btn btn-sm rounded-pill btn-primary">Accept</button>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="avtar avtar-s bg-light-success">
                          <i className="ph-duotone ph-shield-checkered f-18" />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="d-flex">
                          <div className="flex-grow-1 me-3 position-relative">
                            <h6 className="mb-0 text-truncate">Security</h6>
                          </div>
                          <div className="flex-shrink-0">
                            <span className="text-sm">5 hour ago</span>
                          </div>
                        </div>
                        <p className="position-relative mt-1 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                          dummy text ever since the 1500s.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="dropdown-footer">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="d-grid"><button className="btn btn-primary">Archive all</button></div>
                  </div>
                  <div className="col-6">
                    <div className="d-grid"><button className="btn btn-outline-secondary">Mark all as read</button></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
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