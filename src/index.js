import React, { useEffect, useContext } from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import './index.css'
import { UserProvider, UserContext } from './context'
import * as serviceWorker from './serviceWorker'
import 'antd/dist/antd.css'

function App() {
  const { user } = useContext(UserContext)
  useEffect(() => {
    checkCurrentUser()
    //console.log(user)
  }, [user])
  return <Router />
}

function checkCurrentUser() {
  //Aquí buscas con un servicio si hay un usuario en sesión
  // si existe, lo guardas en el contexto con la función loginUser(user). Si no guardas un null o string vacio
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  rootElement
)

serviceWorker.unregister()
