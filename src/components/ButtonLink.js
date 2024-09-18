import React from 'react'
import { Link } from 'react-router-dom'

function ButtonLink(props) {

  function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <Link to={props.link} onClick={scrollTop}>
        <button className="flex py-1 my-4 border group z-10 relative overflow-hidden transition-all duration-300">
          <p className="text-color px-4 border-r group-hover:bg-menyala-falcon transition-all duration-300">
            {props.text}
          </p>
            <p className="px-3 -rotate-90 group-hover:rotate-0 transition-all duration-300">
            <i className="icofont-arrow-right z-20"></i>
          </p>
            <span className="-z-10 absolute top-1.5 bottom-0 right-0 h-5 w-5 scale-0 rounded-full group-hover:scale-150 group-hover:h-full group-hover:w-full transition-all duration-300 ease-in"></span>
        </button>
      </Link>
    </>
  )
}

export default ButtonLink