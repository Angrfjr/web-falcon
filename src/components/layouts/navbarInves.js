import React from 'react'
import { NavLink } from "react-router-dom";
import ButtonNav from "../ButtonNav"

function Navbar() {
  
  const hamburger = () => {
    let hamburger = document.querySelector('#hamburger');
    let menu = document.querySelector('#menu');
    menu.classList.toggle('menu-open');
    menu.classList.toggle('menu-close');
    hamburger.classList.toggle('hamburger-active');
  };

  return (
    <div className="tracking-wider overflow-visible">
      <div className="font-BebasNeue text-blue-primary overflow-visible
        lg:container lg:px-2 lg:w-full lg:flex lg:justify-between lg:items-center lg:my-1
        relative
      ">
        <div className="flex justify-center items-center py-2 relative h-14 lg:h-12">
          <img src="/image/LogoFitnessworkNavBar.png" alt="FitnessWorkc" className="h-7 sm:h-7 flex-none" />
          <div className="absolute right-0 top-0 bottom-0 mr-3 flex items-center lg:hidden">
            <button id="hamburger" onClick={hamburger} name="hamburger" type="button">
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
          </div>
        </div>
        <div className="w-full absolute menu-close overflow-hidden transition-all ease-in duration-300
          lg:static lg:h-full lg:overflow-visible z-50
          bg-gradient-to-b from-white lg:from-transparent 
        " id='menu'>
          <div className="lg:flex lg:justify-between">
            <div className="flex justify-center text-center lg:w-full lg:font-black lg:justify-start lg:px-8 lg:mx-4 text-xl tracking-wider">
              <ul className="lg:flex lg:space-x-4">
                <NavLink onClick={hamburger} to="/" className="lg:px-3">
                  <li className="py-1.5">Home</li>
                </NavLink>
                <li className="py-1.5 lg:px-3 group relative cursor-pointer">
                  {/* <button>
                  </button> */}
                    <p>About Us</p>
                  <div className="h-0 group-hover:h-[105px] overflow-hidden transition-all duration-300
                    lg:absolute lg:group-hover:h-36 lg:min-w-max lg:-left-10 lg:text-left
                  ">
                    <ul className="mt-2 lg:text-white lg:bg-blue-primary lg:p-4 lg:rounded-xl">
                      <NavLink onClick={hamburger} to="/invesment/">
                        <li className="hover:text-yellow-primary transition-all duration-300">
                          OVERVIEW
                        </li>
                      </NavLink>
                      <NavLink onClick={hamburger} to="our-founder">
                        <li className="hover:text-yellow-primary transition-all duration-300">
                          OUR FOUNDER & HISTORY
                        </li>
                      </NavLink>
                      <NavLink onClick={hamburger} to="market-strategy">
                        <li className="hover:text-yellow-primary transition-all duration-300">
                          Market Strategy
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                </li>
                <NavLink onClick={hamburger} to="presentation" className="lg:px-3">
                  <li className="py-1.5">Presentation</li>
                </NavLink>
              </ul>
            </div>
            <div className="font-black sm:flex sm:justify-around lg:space-x-4 lg:min-w-max text-xl">
              <ButtonNav toLink="/login" text="Login"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar