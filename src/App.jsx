import React from "react"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/private/Dashboard"
import Layout from "./layout/Layout"



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Layout />} />
    </Routes>




    
    </>
  )
}

export default App
