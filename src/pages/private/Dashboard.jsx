import React from 'react'

const Dashboard = () => {
  return (
    <>
<div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="card statistics-card-1 overflow-hidden">
            <div className="card-body">
              <img src="https://html.phoenixcoded.net/light-able/bootstrap/assets/images/widget/img-status-4.svg" alt="img" className="img-fluid img-bg" />
              <h5 className="mb-4">Daily Sales</h5>
              <div className="d-flex align-items-center mt-3">
                <h3 className="f-w-300 d-flex align-items-center m-b-0">$249.95</h3>
                <span className="badge bg-light-success ms-2">36%</span>
              </div>
              <p className="text-muted mb-2 text-sm mt-3">You made an extra 35,000 this daily</p>
              <div className="progress" style={{height: 7}}>
                <div className="progress-bar bg-brand-color-3" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card statistics-card-1 overflow-hidden">
            <div className="card-body">
              <img src="https://html.phoenixcoded.net/light-able/bootstrap/assets/images/widget/img-status-5.svg" alt="img" className="img-fluid img-bg" />
              <h5 className="mb-4">Monthly Sales</h5>
              <div className="d-flex align-items-center mt-3">
                <h3 className="f-w-300 d-flex align-items-center m-b-0">$249.95</h3>
                <span className="badge bg-light-primary ms-2">20%</span>
              </div>
              <p className="text-muted mb-2 text-sm mt-3">You made an extra 35,000 this Monthly</p>
              <div className="progress" style={{height: 7}}>
                <div className="progress-bar bg-brand-color-3" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card statistics-card-1 overflow-hidden bg-brand-color-3">
            <div className="card-body">
              <img src="https://html.phoenixcoded.net/light-able/bootstrap/assets/images/widget/img-status-6.svg" alt="img" className="img-fluid img-bg" />
              <h5 className="mb-4 text-white">Yearly Sales</h5>
              <div className="d-flex align-items-center mt-3">
                <h3 className="text-white f-w-300 d-flex align-items-center m-b-0">$249.95</h3>
              </div>
              <p className="text-white text-opacity-75 mb-2 text-sm mt-3">You made an extra 35,000 this Daily</p>
              <div className="progress bg-white bg-opacity-10" style={{height: 7}}>
                <div className="progress-bar bg-white" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-7">
          <div className="card">
            <div className="card-header">
              <h5>Users From United States</h5>
            </div>
            <div className="card-body">
              <div id="world-map-markers" className="set-map" style={{height: 365}} />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-5">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between py-3">
              <h5>Users From United States</h5>
              <div className="dropdown">
                <a className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="material-icons-two-tone f-18">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">View</a>
                  <a className="dropdown-item" href="#">Edit</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="avtar avtar-s bg-light-primary flex-shrink-0">
                  <i className="ph-duotone ph-money f-20" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="mb-0 text-muted">Total Earnings</p>
                  <h5 className="mb-0">$249.95</h5>
                </div>
              </div>
              <div id="earnings-users-chart" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="avtar avtar-s bg-light-warning flex-shrink-0">
                      <i className="ph-duotone ph-lightning f-20" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <p className="mb-0 text-muted">Total ideas</p>
                      <h6 className="mb-0">235</h6>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="avtar avtar-s bg-light-danger flex-shrink-0">
                      <i className="ph-duotone ph-map-pin f-20" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <p className="mb-0 text-muted">Total location</p>
                      <h6 className="mb-0">26</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="card statistics-card-1 overflow-hidden">
            <div className="card-body">
              <img src="https://html.phoenixcoded.net/light-able/bootstrap/assets/images/widget/img-status-7.svg" alt="img" className="img-fluid img-bg" />
              <div className="d-flex align-items-center">
                <img src="https://html.phoenixcoded.net/light-able/bootstrap/assets/images/widget/img-facebook.svg" alt="img" className="img-fluid" />
                <div className="flex-grow-1 ms-3">
                  <p className="mb-0 text-muted">Total Likes</p>
                  <div className="d-inline-flex align-items-center">
                    <h5 className="f-w-300 d-flex align-items-center m-b-0">12,281</h5>
                    <span className="badge bg-success ms-2">+7.2%</span>
                  </div>
                </div>
              </div>
              <div className="row g-3 mt-5 text-center">
                <div className="col-6">
                  <p className="mb-0 text-muted">Target</p>
                  <h5 className="mb-0">35,098</h5>
                </div>
                <div className="col-6 border-start">
                  <p className="mb-0 text-muted">Duration</p>
                  <h5 className="mb-0">3,539</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="card statistics-card-1 overflow-hidden">
            <div className="card-body">
              <img src="https://html.phoenixcoded.net/light-able/bootstrap/assets/images/widget/img-status-8.svg" alt="img" className="img-fluid img-bg" />
              <div className="d-flex align-items-center">
                <img src="https://html.phoenixcoded.net/light-able/bootstrap/assets/images/widget/img-google.svg" alt="img" className="img-fluid" />
                <div className="flex-grow-1 ms-3">
                  <p className="mb-0 text-muted">Total Likes</p>
                  <div className="d-inline-flex align-items-center">
                    <h5 className="f-w-300 d-flex align-items-center m-b-0">12,281</h5>
                    <span className="badge bg-success ms-2">+5.9%</span>
                  </div>
                </div>
              </div>
              <div className="row g-3 mt-5 text-center">
                <div className="col-6">
                  <p className="mb-0 text-muted">Target</p>
                  <h5 className="mb-0">35,098</h5>
                </div>
                <div className="col-6 border-start">
                  <p className="mb-0 text-muted">Duration</p>
                  <h5 className="mb-0">3,539</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-xl-4">
          <div className="card statistics-card-1 overflow-hidden">
            <div className="card-body">
              <img src="https://html.phoenixcoded.net/light-able/bootstrap/assets/images/widget/img-status-9.svg" alt="img" className="img-fluid img-bg" />
              <div className="d-flex align-items-center">
                <img src="https://html.phoenixcoded.net/light-able/bootstrap/assets/images/widget/img-twitter.svg" alt="img" className="img-fluid" />
                <div className="flex-grow-1 ms-3">
                  <p className="mb-0 text-muted">Total Likes</p>
                  <div className="d-inline-flex align-items-center">
                    <h5 className="f-w-300 d-flex align-items-center m-b-0">12,281</h5>
                    <span className="badge bg-success ms-2">+6.2%</span>
                  </div>
                </div>
              </div>
              <div className="row g-3 mt-5 text-center">
                <div className="col-6">
                  <p className="mb-0 text-muted">Target</p>
                  <h5 className="mb-0">35,098</h5>
                </div>
                <div className="col-6 border-start">
                  <p className="mb-0 text-muted">Duration</p>
                  <h5 className="mb-0">3,539</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between py-3">
              <h5>Recent Users</h5>
              <div className="dropdown">
                <a className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="material-icons-two-tone f-18">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">View</a>
                  <a className="dropdown-item" href="#">Edit</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h2 className="mb-3"><b>4.7<small className="text-muted f-18">/5</small></b></h2>
                <div className="star mb-3 f-20">
                  <i className="fas fa-star text-warning" />
                  <i className="fas fa-star text-warning" />
                  <i className="fas fa-star text-warning" />
                  <i className="fas fa-star text-warning" />
                  <i className="fas fa-star-half-alt text-warning" />
                </div>
              </div>
              <div className="row align-items-center g-3 mb-2">
                <div className="col-auto">
                  <h6 className="mb-0">5 <i className="fas fa-star text-warning" /></h6>
                </div>
                <div className="col">
                  <div className="progress" style={{height: 8}}>
                    <div className="progress-bar bg-primary" style={{width: '70%'}} />
                  </div>
                </div>
                <div className="col-auto">
                  <p className="mb-0 text-muted">384</p>
                </div>
              </div>
              <div className="row align-items-center g-3 mb-2">
                <div className="col-auto">
                  <h6 className="mb-0">4 <i className="fas fa-star text-warning" /></h6>
                </div>
                <div className="col">
                  <div className="progress" style={{height: 8}}>
                    <div className="progress-bar bg-primary" style={{width: '55%'}} />
                  </div>
                </div>
                <div className="col-auto">
                  <p className="mb-0 text-muted">145</p>
                </div>
              </div>
              <div className="row align-items-center g-3 mb-2">
                <div className="col-auto">
                  <h6 className="mb-0">3 <i className="fas fa-star text-warning" /></h6>
                </div>
                <div className="col">
                  <div className="progress" style={{height: 8}}>
                    <div className="progress-bar bg-primary" style={{width: '40%'}} />
                  </div>
                </div>
                <div className="col-auto">
                  <p className="mb-0 text-muted">24</p>
                </div>
              </div>
              <div className="row align-items-center g-3 mb-2">
                <div className="col-auto">
                  <h6 className="mb-0">2 <i className="fas fa-star text-warning" /></h6>
                </div>
                <div className="col">
                  <div className="progress" style={{height: 8}}>
                    <div className="progress-bar bg-primary" style={{width: '25%'}} />
                  </div>
                </div>
                <div className="col-auto">
                  <p className="mb-0 text-muted">1</p>
                </div>
              </div>
              <div className="row align-items-center g-3">
                <div className="col-auto">
                  <h6 className="mb-0">1 <i className="fas fa-star text-warning" /></h6>
                </div>
                <div className="col">
                  <div className="progress" style={{height: 8}}>
                    <div className="progress-bar bg-primary" style={{width: '10%'}} />
                  </div>
                </div>
                <div className="col-auto">
                  <p className="mb-0 text-muted">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-8">
          <div className="card table-card">
            <div className="card-header d-flex align-items-center justify-content-between py-3">
              <h5>Recent Users</h5>
              <div className="dropdown">
                <a className="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="material-icons-two-tone f-18">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">View</a>
                  <a className="dropdown-item" href="#">Edit</a>
                </div>
              </div>
            </div>
            <div className="card-body py-2 px-0">
              <div className="table-responsive">
                <table className="table table-hover table-borderless table-sm mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-inline-block align-middle">
                          <img src="../assets/images/user/avatar-1.jpg" alt="user image" className="img-radius align-top m-r-15" style={{width: 40}} />
                          <div className="d-inline-block">
                            <h6 className="m-b-0">Quinn Flynn</h6>
                            <p className="m-b-0">Android developer</p>
                          </div>
                        </div>
                      </td>
                      <td><p className="mb-0"><i className="ph-duotone ph-circle text-warning f-12" /> 11 may 12:30</p></td>
                      <td className="text-end">
                        <button className="btn avtar avtar-xs btn-light-danger"><i className="ti ti-x" /></button>
                        <button className="btn avtar avtar-xs btn-light-success"><i className="ti ti-check" /></button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-inline-block align-middle">
                          <img src="../assets/images/user/avatar-2.jpg" alt="user image" className="img-radius align-top m-r-15" style={{width: 40}} />
                          <div className="d-inline-block">
                            <h6 className="m-b-0">Garrett Winters</h6>
                            <p className="m-b-0">Android developer</p>
                          </div>
                        </div>
                      </td>
                      <td><p className="mb-0"><i className="ph-duotone ph-circle text-success f-12" /> 11 may 12:30</p></td>
                      <td className="text-end">
                        <button className="btn avtar avtar-xs btn-light-danger"><i className="ti ti-x" /></button>
                        <button className="btn avtar avtar-xs btn-light-success"><i className="ti ti-check" /></button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-inline-block align-middle">
                          <img src="../assets/images/user/avatar-3.jpg" alt="user image" className="img-radius align-top m-r-15" style={{width: 40}} />
                          <div className="d-inline-block">
                            <h6 className="m-b-0">Ashton Cox</h6>
                            <p className="m-b-0">Android developer</p>
                          </div>
                        </div>
                      </td>
                      <td><p className="mb-0"><i className="ph-duotone ph-circle text-primary f-12" /> 11 may 12:30</p></td>
                      <td className="text-end">
                        <button className="btn avtar avtar-xs btn-light-danger"><i className="ti ti-x" /></button>
                        <button className="btn avtar avtar-xs btn-light-success"><i className="ti ti-check" /></button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-inline-block align-middle">
                          <img src="../assets/images/user/avatar-4.jpg" alt="user image" className="img-radius align-top m-r-15" style={{width: 40}} />
                          <div className="d-inline-block">
                            <h6 className="m-b-0">Cedric Kelly</h6>
                            <p className="m-b-0">Android developer</p>
                          </div>
                        </div>
                      </td>
                      <td><p className="mb-0"><i className="ph-duotone ph-circle text-danger f-12" /> 11 may 12:30</p></td>
                      <td className="text-end">
                        <button className="btn avtar avtar-xs btn-light-danger"><i className="ti ti-x" /></button>
                        <button className="btn avtar avtar-xs btn-light-success"><i className="ti ti-check" /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard