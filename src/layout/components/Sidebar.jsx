import React, { useContext } from 'react'
import { contextData } from '../../services/Context'
import { Link } from 'react-router-dom'
import {  productPath } from '../../utils/Constants'

const Sidebar = () => {
  return (
    <>
    
    
     <nav className={`pc-sidebar `}>
    <div className="navbar-wrapper">
      <div className="m-header">
        <a href="index.html" className="b-brand text-primary">
          {/* ========   Change your logo from here   ============ */}
          {/* height: 70px;
    width: 70px;
    border-radius: 20px; */}
          <img style={{height:'70px',width:'70px',borderRadius:'10px'}} src="/assets/images/IMG_4833.jpg" alt="logo image" className="logo-lg" />
          <span className="badge bg-brand-color-2 rounded-pill ms-2 theme-version">v1.2.0</span>
        </a>
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
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link"><span className="pc-micon"><i className="ph-duotone ph-lifebuoy" /></span><span className="pc-mtext">Helpdesk</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/helpdesk-dashboard.html">Dashboard</a></li>
              <li className="pc-item pc-hasmenu">
                <a className="pc-link" href="#!">Ticket<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/helpdesk-create-ticket.html">Create</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/helpdesk-ticket.html">List</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/helpdesk-ticket-details.html">Details</a></li>
                </ul>
              </li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/helpdesk-customer.html">Customer</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-newspaper" />
              </span>
              <span className="pc-mtext">Invoice 1</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/application/invoice-list.html">Invoice List</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/application/invoice-create.html">Create</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/application/invoice-view.html">Preview</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link"><span className="pc-micon"><i className="ph-duotone ph-newspaper" /></span><span className="pc-mtext">Invoice 2</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/invoice-dashboard.html">Dashboard</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/invoice-create.html">Create</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/invoice-view.html">Details</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/invoice-list.html">List</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/invoice-edit.html">Edit</a></li>
            </ul>
          </li>
          <li className="pc-item">
            <a href="https://html.phoenixcoded.net/light-able/bootstrap/application/mail.html" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-envelope-open" />
              </span>
              <span className="pc-mtext">Mail</span></a>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-identification-badge" />
              </span>
              <span className="pc-mtext">Membership</span>
              <span className="pc-arrow"><i data-feather="chevron-right" /></span>
            </a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/membership-dashboard.html">Dashboard</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/membership-list.html">List</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/membership-pricing.html">Pricing</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/membership-setting.html">Setting</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-books" />
              </span>
              <span className="pc-mtext">Online Courses</span>
              <span className="pc-arrow"><i data-feather="chevron-right" /></span>
            </a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-dashboard.html">Dashboard</a></li>
              <li className="pc-item pc-hasmenu">
                <a className="pc-link" href="#!">Teacher<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-teacher-list.html">List</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-teacher-apply.html">Apply</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-teacher-add.html">Add</a></li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a className="pc-link" href="#!">Student<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-student-list.html">list</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-student-apply.html">Apply</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-student-add.html">Add</a></li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a className="pc-link" href="#!">Courses<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-course-view.html">View</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-course-add.html">Add</a></li>
                </ul>
              </li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-pricing.html">Pricing</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-site.html">Site</a></li>
              <li className="pc-item pc-hasmenu">
                <a className="pc-link" href="#!">Setting<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-setting-payment.html">Payment</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-setting-pricing.html">Pricing</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/admins/course-setting-notifications.html">Notifications</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="pc-item">
            <a href="https://html.phoenixcoded.net/light-able/bootstrap/application/plans.html" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-currency-circle-dollar" />
              </span>
              <span className="pc-mtext">Plans</span></a>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-user-circle" />
              </span>
              <span className="pc-mtext">Users</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/application/account-profile.html">Account Profile</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/application/social-media.html">Social media</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/application/user-card.html">User Card</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/application/user-list.html">User List</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/application/team.html">Team</a></li>
            </ul>
          </li>
          <li className="pc-item pc-caption">
            <label>Pages</label>
            <i className="ph-duotone ph-devices" />
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-shield-checkered" />
              </span>
              <span className="pc-mtext">Authentication</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">Authentication 1<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/login-v1.html">Login</a></li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/register-v1.html">Register</a></li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/forgot-password-v1.html">Forgot Password</a></li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/reset-password-v1.html">reset password</a> </li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/code-verification-v1.html">code verification</a></li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">Authentication 2<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/login-v2.html">Login</a></li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/register-v2.html">Register</a></li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/forgot-password-v2.html">Forgot password</a> </li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/reset-password-v2.html">reset password</a> </li>
                  <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/code-verification-v2.html">code verification</a></li>
                </ul>
              </li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/login-modal.html">Login Modal</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-wrench" />
              </span>
              <span className="pc-mtext">Maintenance</span><span className="pc-arrow"><i data-feather="chevron-right" /></span>
            </a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/error-404.html">Error 404</a></li>
              <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/connection-lost.html">Connection lost</a></li>
              <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/under-construction.html">Under Construction</a></li>
              <li className="pc-item"><a className="pc-link" target="_blank" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/coming-soon.html">Coming soon</a></li>
            </ul>
          </li>
          <li className="pc-item"><a href="https://html.phoenixcoded.net/light-able/bootstrap/pages/contact-us.html" className="pc-link"><span className="pc-micon"> <i className="ph-duotone ph-target" /> </span><span className="pc-mtext">Contact Us</span></a>
          </li>
          <li className="pc-item"><a href="https://html.phoenixcoded.net/light-able/bootstrap/index.html" className="pc-link" target="_blank"><span className="pc-micon"> <i className="ph-duotone ph-rocket" /> </span>
              <span className="pc-mtext pc-icon-link">Landing <i className="ti ti-link text-primary f-14" /></span>
            </a>
          </li>
          <li className="pc-item"><a href="https://html.phoenixcoded.net/light-able/bootstrap/pages/loading.html" className="pc-link"><span className="pc-micon"> <i className="ph-duotone ph-fan" /> </span><span className="pc-mtext">Loading</span></a>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-magnifying-glass" />
              </span>
              <span className="pc-mtext">Search</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/search-page.html">Search Page</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/pages/contact-search.html">Contact Search</a></li>
            </ul>
          </li>
          <li className="pc-item">
            <a href="https://html.phoenixcoded.net/light-able/bootstrap/pages/settings.html" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-globe" />
              </span>
              <span className="pc-mtext">Site Settings</span>
            </a>
          </li>
          <li className="pc-item pc-caption">
            <label>UI Components</label>
            <i className="ph-duotone ph-compass-tool" />
          </li>
          <li className="pc-item">
            <a href="https://html.phoenixcoded.net/light-able/bootstrap/elements/bc_alert.html" className="pc-link" target="_blank"><span className="pc-micon"> <i className="ph-duotone ph-compass-tool" /></span>
              <span className="pc-mtext pc-icon-link">Components <i className="ti ti-link text-primary f-14" /></span>
            </a>
          </li>
          <li className="pc-item">
            <a href="https://html.phoenixcoded.net/light-able/bootstrap/elements/animation.html" className="pc-link">
              <span className="pc-micon"> <i className="ph-duotone ph-flower" /> </span><span className="pc-mtext">Animation</span></a>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link"><span className="pc-micon"> <i className="ph-duotone ph-flower-lotus" /></span><span className="pc-mtext">Icons</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/elements/icon-feather.html">Feather</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/elements/icon-fontawesome.html">Font Awesome 5</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/elements/icon-material.html">Material</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/elements/icon-tabler.html">Tabler</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/elements/icon-phosphor.html">Phosphor</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/elements/icon-custom.html">Custom</a></li>
            </ul>
          </li>
          <li className="pc-item pc-caption">
            <label>Forms</label>
            <i className="ph-duotone ph-textbox" />
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-textbox" />
              </span>
              <span className="pc-mtext">Forms Elements</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form_elements.html">Form Basic</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form_floating.html">Form Floating</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_basic.html">Form Options</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_input_group.html">Input Groups</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_checkbox.html">Checkbox</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_radio.html">Radio</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_switch.html">Switch</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_megaoption.html">Mega option</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-plug-charging" />
              </span>
              <span className="pc-mtext">Forms Plugins</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item pc-hasmenu">
                <a className="pc-link" href="#">Date<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_datepicker.html">Datepicker</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_daterangepicker.html">Date Range Picker</a> </li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_timepicker.html">Timepicker</a></li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a className="pc-link" href="#">Select<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_choices.html">Choices js</a></li>
                </ul>
              </li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_rating.html">Rating</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_recaptcha.html">Google reCaptcha</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_inputmask.html">Input Masks</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_clipboard.html">Clipboard</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_nouislider.html">Nouislider</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_switchjs.html">Bootstrap Switch</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_typeahead.html">Typeahead</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-pen-nib" />
              </span>
              <span className="pc-mtext">Text Editors</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_tinymce.html">Tinymce</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_quill.html">Quill</a></li>
              <li className="pc-item pc-hasmenu">
                <a className="pc-link" href="#">CK editor<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/editor-classic.html">classic</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/editor-document.html">Document</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/editor-inline.html">Inline</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/editor-balloon.html">Balloon</a></li>
                </ul>
              </li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_markdown.html">Markdown</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-windows-logo" />
              </span>
              <span className="pc-mtext">Form Layouts</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_lay-default.html">Layouts</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_lay-multicolumn.html">Multicolumn</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_lay-actionbars.html">Actionbars</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_lay-stickyactionbars.html">Sticky Action bars</a> </li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-cloud-arrow-up" />
              </span>
              <span className="pc-mtext">File upload</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/file-upload.html">Dropzone</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_flu-uppy.html">Uppy</a></li>
            </ul>
          </li>
          <li className="pc-item">
            <a href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form2_wizard.html" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-tabs" />
              </span>
              <span className="pc-mtext">wizard</span></a>
          </li>
          <li className="pc-item">
            <a href="https://html.phoenixcoded.net/light-able/bootstrap/forms/form-validation.html" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-password" />
              </span>
              <span className="pc-mtext">Form Validation</span></a>
          </li>
          <li className="pc-item"><a href="https://html.phoenixcoded.net/light-able/bootstrap/forms/image_crop.html" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-crop" />
              </span>
              <span className="pc-mtext">Image cropper</span></a></li>
          <li className="pc-item pc-caption">
            <label>table</label>
            <i className="ph-duotone ph-table" />
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-table" />
              </span>
              <span className="pc-mtext">Bootstrap Table</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_bootstrap.html">Basic table</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_sizing.html">Sizing table</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_border.html">Border table</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_styling.html">Styling table</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-grid-nine" />
              </span>
              <span className="pc-mtext">Vanilla Table</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_dt-simple.html">Basic initialization</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_dt-dynamic-import.html">Dynamic Import</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_dt-render-column-cells.html">Render Column Cells</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_dt-column-manipulation.html">Column Manipulation</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_dt-datetime-sorting.html">Datetime Sorting</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_dt-methods.html">Methods</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_dt-add-rows.html">Add Rows</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_dt-fetch-api.html">Fetch API</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_dt-filters.html">Filters</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/tbl_dt-export.html">Export</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-text-columns" />
              </span>
              <span className="pc-mtext">Data table</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_advance.html">Advance initialization</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_styling.html">Styling</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_api.html">API</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_plugin.html">Plug-in</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_sources.html">Data sources</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-wall" />
              </span>
              <span className="pc-mtext">DT extensions</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_ext_autofill.html">Autofill</a></li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">Button<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_ext_basic_buttons.html">Basic button</a></li>
                  <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_ext_export_buttons.html">Data export</a></li>
                </ul>
              </li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_ext_col_reorder.html">Col reorder</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_ext_fixed_columns.html">Fixed columns</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_ext_fixed_header.html">Fixed header</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_ext_key_table.html">Key table</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_ext_responsive.html">Responsive</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_ext_row_reorder.html">Row reorder</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_ext_scroller.html">Scroller</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/table/dt_ext_select.html">Select table</a></li>
            </ul>
          </li>
          <li className="pc-item pc-caption">
            <label>Charts &amp; Maps</label>
            <i className="ph-duotone ph-chart-pie-slice" />
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-chart-donut" />
              </span>
              <span className="pc-mtext">Charts</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/chart/chart-apex.html">Apex Chart</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/chart/chart-peity.html">Peity Chart</a></li>
            </ul>
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-map-trifold" />
              </span>
              <span className="pc-mtext">Maps</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/chart/map-vector.html">Vector Map</a></li>
              <li className="pc-item"><a className="pc-link" href="https://html.phoenixcoded.net/light-able/bootstrap/chart/map-gmap.html">Gmaps</a></li>
            </ul>
          </li>
          <li className="pc-item pc-caption">
            <label>Other</label>
            <i className="ph-duotone ph-suitcase" />
          </li>
          <li className="pc-item pc-hasmenu">
            <a href="#!" className="pc-link"><span className="pc-micon"> <i className="ph-duotone ph-tree-structure" /> </span><span className="pc-mtext">Menu levels</span><span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
            <ul className="pc-submenu">
              <li className="pc-item"><a className="pc-link" href="#!">Level 2.1</a></li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">Level 2.2<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="#!">Level 3.1</a></li>
                  <li className="pc-item"><a className="pc-link" href="#!">Level 3.2</a></li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">Level 3.3<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                    <ul className="pc-submenu">
                      <li className="pc-item"><a className="pc-link" href="#!">Level 4.1</a></li>
                      <li className="pc-item"><a className="pc-link" href="#!">Level 4.2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="pc-item pc-hasmenu">
                <a href="#!" className="pc-link">Level 2.3<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                <ul className="pc-submenu">
                  <li className="pc-item"><a className="pc-link" href="#!">Level 3.1</a></li>
                  <li className="pc-item"><a className="pc-link" href="#!">Level 3.2</a></li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#!" className="pc-link">Level 3.3<span className="pc-arrow"><i data-feather="chevron-right" /></span></a>
                    <ul className="pc-submenu">
                      <li className="pc-item"><a className="pc-link" href="#!">Level 4.1</a></li>
                      <li className="pc-item"><a className="pc-link" href="#!">Level 4.2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="pc-item"><a href="https://html.phoenixcoded.net/light-able/bootstrap/other/sample-page.html" className="pc-link">
              <span className="pc-micon">
                <i className="ph-duotone ph-desktop" />
              </span>
              <span className="pc-mtext">Sample page</span></a></li>
        </ul>
        <div className="card nav-action-card bg-brand-color-4">
          <div className="card-body" style={{backgroundImage: 'url("https://html.phoenixcoded.net/light-able/bootstrap/assets/images/layout/nav-card-bg.svg")'}}>
            <h5 className="text-dark">Help Center</h5>
            <p className="text-dark text-opacity-75">Please contact us for more questions.</p>
            <a href="https://phoenixcoded.support-hub.io/" className="btn btn-primary" target="_blank">Go to help Center</a>
          </div>
        </div>
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