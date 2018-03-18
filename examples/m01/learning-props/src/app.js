'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import LikeButton from './like-button'
import SearchButton from './search-button'
import StateExample1 from './state-example1'
import ColorButton from './color-button'

class App extends Component {
  render() {
    return (
      <div className='container' >
        <Title name="João" />

        {['blue', 'red', 'green'].map((square, index) => (
          <Square key={index} color={square} />
        ))}

        <LikeButton />
        <SearchButton />
        <StateExample1 />
        <ColorButton />
      </div>
    )
  }
}

export default App
