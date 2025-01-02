import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <NavLink to="/" className="link">Home</NavLink>
      <NavLink to="/about"  className="link">About</NavLink>

    </div>
  )
}

export default Navbar
