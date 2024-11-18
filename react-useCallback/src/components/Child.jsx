import React from 'react'

const Child = React.memo(
    (props) => {
        console.log("Child component got re-rendered again")
        return (
            <div>
            <button onClick={props.handleClick}>
                {props.buttonName}
            </button>
            </div>
        )
    }
);

export default Child
