import React, { useContext, useState } from 'react'
import { UserContext } from '../context'
import useForm from '../hooks/useForm'
import AuthService from '../services/auth'
import { Button } from 'antd'

export default props => {
  const [username, setUsername] = useState('')
  const [type, setType] = useState('')
  const { loginUser } = useContext(UserContext)
  const authService = new AuthService()
  const [form, handleInputs] = useForm()
  const handleSignup = () => {
    authService
      .signup(form)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleLogin = () => {
    authService
      .login(form)
      .then(response => {
        loginUser(response.data.user)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleLogout = () => {
    authService
      .logout()
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const login = () => {
    loginUser({ name: username, userType: type })
  }
  const handleUserName = e => {
    setUsername(e.target.value)
  }
  const handleType = e => {
    setType(e.target.value)
  }
  return (
    <main>
      <div className="signup">
        <h2>Registro</h2>
        <input type="text" name="name" placeholder="Nombre" onChange={e => handleInputs(e)} />
        <input type="email" name="email" placeholder="Correo electrónico" onChange={e => handleInputs(e)} />
        <input type="password" name="password" placeholder="Contraseña" onChange={e => handleInputs(e)} />
        <Button type="primary" onClick={handleSignup}>
          Enviar
        </Button>
      </div>
      <div className="login">
        <h2>Acceso</h2>
        <input type="email" name="email" placeholder="Correo electrónico" onChange={e => handleInputs(e)} />
        <input type="password" name="password" placeholder="Contraseña" onChange={e => handleInputs(e)} />
        <Button type="primary" onClick={handleLogin}>
          Inicio sesión
        </Button>
      </div>
      <div>
        <Button type="primary" onClick={handleLogout}>
          Salir
        </Button>
      </div>
      <br />
      <div>
        <input placeholder="Usuario" onChange={handleUserName} />
        <input placeholder="Tipo de Usuario" onChange={handleType} />
        <Button type="primary" onClick={login}>
          Enviar
        </Button>
      </div>
    </main>
  )
}
