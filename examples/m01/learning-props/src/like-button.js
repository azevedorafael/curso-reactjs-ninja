'use strict'

import React from 'react'
import Button from './button'

const LikeButton = () => (
    <Button
        handleClick={() => {
            alert('Like')
        }}
    >
        👍
    </Button>
)

export default LikeButton