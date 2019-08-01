import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// import Home from './components/Home'
import Dashboard from './components/Dashboard'
import CreatePost from './components/CreatePost'
// import NavBar from './components/NavBar'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import Catalogue from './Pages/Catalogue'
import Profile from './Pages/Profile'
// import { PrivateRoute } from './components/PrivateRoute'
import { UserContext } from './context'
import WrappedRegistrationForm from './components/Home'
import WrappedNormalLoginForm from './Pages/Login'
import { Layout, Menu } from 'antd'

const Nav = props => {
  const { Header, Content, Footer } = Layout
  const { logoutUser } = useContext(UserContext)
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">
            <Link to="/">Landing</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/home">Inicio</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/profile">Perfil</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/catalogue">Catálogo</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/login">Inicie sesión</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ backgroundImage: 'url(../src/assets/fondue.png)', padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>green, Go!</Footer>
    </Layout>
  )
}

export default props => (
  <BrowserRouter>
  
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Home" component={WrappedRegistrationForm} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/catalogue" component={Catalogue} />
      <Route exact path="/" component={Home} />
      <Route component={Dashboard} exact path="/" />
      <Route component={CreatePost} exact path="/new" />
      <Route component={WrappedNormalLoginForm} exact path="/login" />
    </Switch>
  </BrowserRouter>
)
