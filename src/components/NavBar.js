import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from '../styles'
// import { faPlus, faIgloo } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {
  return (
    <Nav>
      <NavLink to="/">{/* <FontAwesomeIcon icon={faIgloo} /> */}</NavLink>
      <NavLink to="/new">{/* <FontAwesomeIcon icon={faPlus} /> */}</NavLink>
    </Nav>
  )
}

export default NavBar
