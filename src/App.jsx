import React from "react"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/private/Dashboard"
import Layout from "./layout/Layout"
import ProductPage from "./pages/private/ProductPage"
import { basePath, dashboardPath, loginPath, productPath } from "./utils/Constants"
import Login from "./layout/components/Login"
import PrivateRoute from "./utils/PrivateRoute"
import { PublicRoute } from "./utils/PublicRoute"
import { Context_provider } from "./services/Context"



function App() {

  return (
    <>
      <Context_provider>
      <Routes>
      <Route path={basePath + loginPath} element={<Login />}/>
      <Route path={basePath} element={<PrivateRoute> <Layout /> </PrivateRoute>}>
      <Route index element={<Dashboard /> } />
      <Route path={productPath} element={<ProductPage />} />
      </Route>
      </Routes>
      </Context_provider>
   







    {/* <Routes>
    <Route path={loginPath} element={<PublicRoute> <Login /> </PublicRoute> } />
    <Route path="" element={<Layout />}>
    <Route path={dashboardPath} element={ <PrivateRoute><Dashboard /></PrivateRoute> } />
    <Route path={productPath} element={<ProductPage />} />
    </Route>
    </Routes> */}




    
    </>
  )
}

export default App
