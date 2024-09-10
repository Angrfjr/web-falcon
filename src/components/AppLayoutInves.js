import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarInves from './layouts/navbarInves'
import Footer from './layouts/footer'

function AppLayoutInves() {
  return (
    <>
      <NavbarInves />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayoutInves