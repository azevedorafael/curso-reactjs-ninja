'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      checked: false,
      value: '2'
    }
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.value} onChange={(e) => {
            console.log(e)
            this.setState({
              value: e.target.value
            })
          }} />

          {/* Controlled checkbox */}
          <label>
            <input type='checkbox' value='my-checkbox' checked={this.state.checked}
              onChange={(e) =>
                this.setState(
                  {
                    checked: e.target.checked
                  })} />
            Checkbox
          </label>

{/* Uncontrolled checkbox */}
          <label>
            <input type='checkbox' value='my-checkbox' defaultChecked/>
            Checkbox
          </label>

        <input type='radio' name='rd' value='1' /> Radio 1
        <input type='radio' name='rd' value='1' defaultChecked/> Radio 1

        <select multiple value={this.state.value} onChange={(e) => {
          this.setState({
            value: e.target.value
          })
        }}>
                  <option value='1' >Opção 1</option>
                  <option value='2' >Opção 2</option>
                  <option value='3'>Opção 3</option>
        </select>


        </form >
      </div>
    )
  }
}

export default App
