import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './layouts/navbar'
import Footer from './layouts/footer'
import './styles.css';
function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout