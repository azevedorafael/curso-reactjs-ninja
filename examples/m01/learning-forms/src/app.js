'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 'Valor inicial',
      checked: false
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



        </form >
      </div>
    )
  }
}

export default App
