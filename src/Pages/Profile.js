import React from 'react'
import Association from '../components/Association'
import Buyer from '../components/Buyer'
import Sponsor from '../components/Sponsor'
import Supplier from '../components/Supplier'

export default props => {
  const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

  if (!loggedUser) return <p>...Loading</p>
  return loggedUser.role === 'Buyer' ? (
    <Buyer />
  ) : loggedUser.role === 'Sponsor' ? (
    <Sponsor />
  ) : loggedUser.role === 'Asociacion' ? (
    <Association />
  ) : (
    <Supplier />
  )
}
