import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './layouts/navbar'

function AppLayoutNotFooter() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default AppLayoutNotFooter