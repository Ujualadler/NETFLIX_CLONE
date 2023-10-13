import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
        <NavLink style={{color:'green'}} to='/'>Home</NavLink>
        <NavLink  to='about'>About</NavLink >
        
    </nav>
  )
}

export default Navbar