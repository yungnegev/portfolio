import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className="nav-menu">
            <NavLink to={'/'}>Portfolio</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </div>
    </nav>
  )
}

export default Navbar