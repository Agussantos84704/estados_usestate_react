import React from 'react'
import { useState } from "react";

function Counter() {
    let [value, setValue] = useState(0);

    const increaseCount = () => {
        setValue(value +1);
        console.log(value)
    }

    const decreaseCount = () => {
        setValue(value -1);
        console.log(value)

    }

    return (
        <div>
            <h2>El valor es {value} </h2>

            <button
                onClick={
                    increaseCount 
                }>+</button>

            <button 
                onClick={
                    decreaseCount
                }
                disabled={value < 1
                }>-</button>

        </div>
    )
}

export default Counter