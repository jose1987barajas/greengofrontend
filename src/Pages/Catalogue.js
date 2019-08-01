import React, { useContext } from 'react'
import { UserContext } from '../context'

export default props => {
  const { user } = useContext(UserContext)
  return user === null ? <h1>Catálogo para invitados</h1> : <h1>Catálogo para usuarios</h1>
}
