import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonNav from "../ButtonNav";
import "../styles.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="tracking-wider overflow-visible">
      <div className="font-BebasNeue text-blue-primary lg:container lg:px-2 lg:w-full lg:flex lg:justify-between lg:items-center lg:my-1 relative">
        <div className="flex justify-center items-center py-2 relative h-14 lg:h-12">
          <img src="/image/falcon/logo-falcon-header.png" alt="falcon" className="h-12 sm:h-12 flex-none" />
          <div className="absolute right-0 top-0 bottom-0 mr-3 flex items-center lg:hidden">
            <button onClick={toggleMenu} className="p-2 rounded">
              <div className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>

        </div>

        {/* Menu Navbar */}
        <div
          className={`w-full absolute overflow-hidden transition-all ease-in duration-300 lg:static lg:h-full lg:overflow-visible z-50
          bg-gradient-to-b from-white lg:from-transparent ${isMenuOpen ? "menu-open" : "menu-close"}`}
        >
          <div className="lg:flex lg:justify-between">
            <div className="flex justify-center items-center text-center lg:w-full lg:font-black text-xl tracking-wider">
              <ul className="lg:flex lg:space-x-2 xl:space-x-4 flex flex-col lg:flex-row">
                {[
                  { name: "Home", path: "/" },
                  { name: "Workouts", path: "/workouts" },
                  { name: "About", path: "/about" },
                  { name: "Shop", path: "/shop" },
                  { name: "Partnership", path: "/partnership" }
                ].map(({ name, path }) => (
                  <NavLink
                    key={name}
                    onClick={toggleMenu}
                    to={path}
                    className={({ isActive }) =>
                      `lg:px-3 py-1.5 transition-all duration-300 ${isActive ? "text-red-600 font-bold" : "text-red-900"}`
                    }
                  >
                    {name}
                  </NavLink>
                ))}
              </ul>
            </div>

            <div className="sm:flex sm:justify-around lg:space-x-4 lg:min-w-max text-xl">
              <ButtonNav
                toLink="/near"
                text="FIND FALCON NEAR YOU"
                className="py-2 px-4 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
