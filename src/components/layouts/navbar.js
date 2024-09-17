import React from "react";
import { Link, NavLink } from "react-router-dom";
import ButtonNav from "../buttonNav";

function Navbar() {
  const hamburger = () => {
    let hamburger = document.querySelector("#hamburger");
    let menu = document.querySelector("#menu");
    menu.classList.toggle("menu-open");
    menu.classList.toggle("menu-close");
    hamburger.classList.toggle("hamburger-active");
  };

  return (
    <div className="tracking-wider overflow-visible">
      <div
        className="font-BebasNeue text-blue-primary overflow-visible
        lg:container lg:px-2 lg:w-full lg:flex lg:justify-between lg:items-center lg:my-1
        relative
      "
      >
        <div className="flex justify-center items-center py-2 relative h-14 lg:h-12">
          <img
            src="/image/falcon/logo-falcon-header.png"
            alt="falcon"
            className="h-7 sm:h-7 flex-none"
          />
          <div className="absolute right-0 top-0 bottom-0 mr-3 flex items-center lg:hidden">
            <button
              id="hamburger"
              onClick={hamburger}
              name="hamburger"
              type="button"
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
          </div>
        </div>
        <div
          className="w-full absolute menu-close overflow-hidden transition-all ease-in duration-300
          lg:static lg:h-full lg:overflow-visible z-50
          bg-gradient-to-b from-white lg:from-transparent 
        "
          id="menu"
        >
          <div className="lg:flex lg:justify-between">
            <div className="flex justify-center items-center text-center lg:w-full lg:font-black text-xl tracking-wider">
              <ul className="lg:flex lg:space-x-2 xl:space-x-4">
                <NavLink onClick={hamburger} to="/" className="lg:px-3">
                  <li className="py-1.5">Home</li>
                </NavLink>

                <li className="py-1.5 lg:px-3 group relative cursor-pointer">
                  <p>WorkOuts</p>
                  <div
                    className="h-0 group-hover:h-[135px] overflow-hidden transition-all duration-300
                    lg:absolute lg:group-hover:h-44 lg:min-w-max lg:-left-10 lg:text-left
                  "
                  >
                    <ul className="mt-2 lg:text-white lg:bg-blue-primary lg:p-4 lg:rounded-xl">
                      <NavLink onClick={hamburger} to="/workouts">
                        <li className="hover:text-yellow-primary transition-all duration-300">
                          OUR PROGRAM
                        </li>
                      </NavLink>
                      <NavLink onClick={hamburger} to="/time-table">
                        <li className="hover:text-yellow-primary transition-all duration-300">
                          TIME TABLE
                        </li>
                      </NavLink>
                      <NavLink onClick={hamburger} to="/online-class">
                        <li className="hover:text-yellow-primary transition-all duration-300">
                          ONLINE CLASS
                        </li>
                      </NavLink>
                      <NavLink onClick={hamburger} to="/virtual-class">
                        <li className="hover:text-yellow-primary transition-all duration-300">
                          Virtual Class
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                </li>
                <li className="py-1.5 lg:px-3 group relative cursor-pointer">
                  <p>About</p>
                  <div
                    className="h-0 group-hover:h-[105px] overflow-hidden transition-all duration-300
                    lg:absolute lg:group-hover:h-36 lg:min-w-max lg:-left-10 lg:text-left
                  "
                  >
                    <ul className="mt-2 lg:text-white lg:bg-blue-primary lg:p-4 lg:rounded-xl">
                      <NavLink onClick={hamburger} to="/about">
                        <li className="hover:text-yellow-primary transition-all duration-300">
                          About Us
                        </li>
                      </NavLink>
                      <NavLink onClick={hamburger} to="/faqs">
                        <li className="hover:text-yellow-primary transition-all duration-300">
                          Faq
                        </li>
                      </NavLink>
                      <NavLink onClick={hamburger} to="/tnc">
                        <li className="hover:text-yellow-primary transition-all duration-300">
                          Term & Condition
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                </li>
                <NavLink onClick={hamburger} to="/article" className="lg:px-3">
                  <li className="py-1.5">Article</li>
                </NavLink>
                <NavLink onClick={hamburger} to="/shop" className="lg:px-3">
                  <li className="py-1.5">Shop</li>
                </NavLink>
                <NavLink onClick={hamburger} to="/privacy" className="lg:px-3">
                  <li className="py-1.5">Privasi</li>
                </NavLink>
              </ul>
            </div>
            <div className="sm:flex sm:justify-around lg:space-x-4 lg:min-w-max text-xl">
              <ButtonNav
                toLink="/invesment"
                text="FIND FALCON NEAR YOU"
                className="bg-red-600 text-white py-2 px-4 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
