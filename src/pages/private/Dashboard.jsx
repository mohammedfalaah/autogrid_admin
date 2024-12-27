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
                <h3 className="f-w-300 d-flex align-items-center m-b-0">249.95</h3>
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
                <h3 className="f-w-300 d-flex align-items-center m-b-0">249.95</h3>
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
                <h3 className="text-white f-w-300 d-flex align-items-center m-b-0">249.95</h3>
              </div>
              <p className="text-white text-opacity-75 mb-2 text-sm mt-3">You made an extra 35,000 this Daily</p>
              <div className="progress bg-white bg-opacity-10" style={{height: 7}}>
                <div className="progress-bar bg-white" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
       
       
       
      </div>
    </>
  )
}

export default Dashboard