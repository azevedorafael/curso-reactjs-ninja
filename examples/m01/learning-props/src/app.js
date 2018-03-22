'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import LikeButton from './like-button'
import SearchButton from './search-button'
import StateExample1 from './state-example1'
import ColorButton from './color-button'
import Timer from './timer'
import Button from './button';
class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      time: 0,
      showTimer: true
    }
  }

  componentWillMount() {
    console.log('componentWillMount app')
  }

  componentDidMount() {
    console.log('componentDidMount app')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount app')
  }

  render() {
    console.log('render app')
    return (
      <div className='container' >
        <Title />

        {['blue', 'red', 'green'].map((square, index) => (
          <Square key={index} color={square} />
        ))}

        <LikeButton />
        <SearchButton />
        <StateExample1 />
        <ColorButton />

        {this.state.showTimer && <Timer time={this.state.time} />}

        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}>Show / Hide Timer
        </button>

        <Timer time={this.state.time} />

        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>Change props
        </button>
      </div>
    )
  }
}

export default App
