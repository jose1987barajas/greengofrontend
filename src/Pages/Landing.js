import React, { Component } from 'react'
import sample from '../assets/background.mp4'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

class Example extends Component {
  render() {
    return (
      <div id="background">
        <video className="videoTag" autoPlay loop>
          <source src={sample} type="video/mp4" />
        </video>
        <div id="landing">
          <h1 style={{ color: '#fff' }}>green, Go!</h1>
          <Link to="/home">
            <Button>Inicio</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Example
