import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from '../styles'

const NavBar = () => {
  return (
    <Nav>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/new">Nuevo</NavLink>
    </Nav>
  )
}

export default NavBar
