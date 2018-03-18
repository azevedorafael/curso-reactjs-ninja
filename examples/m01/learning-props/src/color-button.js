import React, { Component } from 'react';
import Square from './square';
import Button from './button'

class ColorButton extends Component {
    constructor() {
        super()
        this.state = {
            color: 'orange'
        }
    }
    render() {
        return (
            <div>
                <Square color={this.state.color} />
                {
                    ['yellow', 'blue', 'red'].map((color) => (
                        <Button
                            key={color}
                            handleClick={() => this.setState({ color })}>
                            {color}
                        </Button>
                    ))
                }
            </div>
        )
    }
}

export default ColorButton
