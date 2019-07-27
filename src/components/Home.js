import React from 'react'
import useForm from '../hooks/useForm'
import AuthService from '../services/auth'

function Home() {
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
        console.log(response)
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

  return (
    <main>
      <div className="signup">
        <h2>Signup</h2>
        <input type="text" name="name" placeholder="Name" onChange={e => handleInputs(e)} />
        <input type="email" name="email" placeholder="E-mail" onChange={e => handleInputs(e)} />
        <input type="password" name="password" placeholder="Password" onChange={e => handleInputs(e)} />
        <button onClick={handleSignup}>Signup</button>
      </div>
      <div className="login">
        <h2>Login</h2>
        <input type="email" name="email" placeholder="E-mail" onChange={e => handleInputs(e)} />
        <input type="password" name="password" placeholder="Password" onChange={e => handleInputs(e)} />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
     
    </main>
  )
}

export default Home
