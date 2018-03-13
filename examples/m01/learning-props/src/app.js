'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
class App extends Component {
  render() {
    return (
      <div className='container' onClick={(e) => {
        alert("Clicou")
      }}>
        <Title name="João" />

        {['blue','red','green'].map((square, index) =>(
          <Square key={index} color={square} />
        ))}
      </div>
    )
  }
}

export default App
