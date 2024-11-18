import React from 'react'
import Card from './Card'

const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.incrementCount}>
            {props.text}
        </button>
    </div>
  )
}

export default Button
