import React, { Component } from 'react';

class StateExample1 extends Component {
    constructor() {
        super()
        this.state = {
            text: 'Test text'
        }
    }
    render() {
        let temp = 0;
        return (
            <div onClick={() => this.setState({
                text: `Eu ${temp++}`
            })}>
                {this.state.text}
            </div>
        )
    }
}

export default StateExample1
