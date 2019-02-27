import React, { Component } from 'react'
import Dragon from './dragon.jpg'

export class Car extends Component {
  render() {
    return (
      <div>
        <h1>I am a professional</h1>
        <img src={Dragon} alt="d"></img>
      </div>
    )
  }
}

export default Car
