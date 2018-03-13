'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
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

        <Button> <span>Children Span Text </span></Button>
      </div>
    )
  }
}

export default App
