import React from 'react';
import { NavLink } from "react-router-dom";

function ButtonNav(props) {
  return (
    <div className="text-white py-1 flex justify-center items-center">
      <NavLink 
        to={props.toLink} 
        className="bg-menyala-falcon px-4 py-0.5 tracking-wider"
      >
        {props.text}
      </NavLink>
    </div>
  );
}

export default ButtonNav;
