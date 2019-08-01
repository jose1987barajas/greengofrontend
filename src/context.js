import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = props => {
  const [user, setUser] = useState(null)

  const loginUser = user => {
    setUser(user)
  }
  const logoutUser = user => {
    setUser(null)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        logoutUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
