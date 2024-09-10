import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function AppLayoutTimeTable() {
  const bgPage = {
    width: "100%",
    backgroundImage: "url(/image/Header_Timetable.jpg)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div>
      <div className="z-0 min-h-screen object-cover object-center relative" style={bgPage}>
        <div className="-z-10 absolute top-0 h-full w-full bg-blue-primary/80"></div>
        <div className="p-8">
          <div className="z-30 text-white py-4 flex justify-around">
            <NavLink to="/time-table" className={({ isActive }) => "px-8 font-bold pb-2" + (isActive ? ' active-border active' : '')}>
              <button>STUDIO WORKOUTS</button>
            </NavLink>
            <NavLink to="/online-class" className={({ isActive }) => "px-8 font-bold pb-2" + (isActive ? ' active-border active' : '')}>
              <button>ONLINE WORKOUTS</button>
            </NavLink>
          </div>
          <div className="border-b-2 border-yellow-primary my-4 mx-2"></div>
          <div>
            <Outlet/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AppLayoutTimeTable