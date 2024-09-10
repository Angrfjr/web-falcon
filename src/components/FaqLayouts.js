import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function FaqLayouts() {
  return (
    <>
      <div className="container lg:flex lg:flex-row-reverse">
        <div className="w-full lg:w-96 font-judul tracking-wide my-4 mx-8 lg:mx-0">
          <div className="bg-neutral-100 mr-auto inline-block py-4 pl-4 pr-8 w-full text-2xl">
            <div className="flex">
              <h2 className="text-blue-primary border-b-2 border-blue-primary">More Support Topic</h2>
            </div>
            <div className="text-neutral-500 py-4">
              <ul>
                <li className="hover:text-blue-primary transition-all duration-300">
                  <NavLink to="faq" >FAQ</NavLink>
                </li>
                <li className="hover:text-blue-primary transition-all duration-300">
                  <NavLink to="club-and-fasility" >CLUB AND FACILITY</NavLink>
                </li>
                <li className="hover:text-blue-primary transition-all duration-300">
                  <NavLink to="safety-health" >Safety & Health Protocols</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" container lg:mr-8 lg:max-w-3xl w-full my-4 text-blue-primary">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default FaqLayouts