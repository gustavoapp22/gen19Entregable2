import React from 'react';
import { useState } from 'react';

const Counter = () => {

    const [ red, setRed ] = useState(0);

    const increment = () => {
  setRed( red +1)
    }
    const decrement = () => {
        setRed ( red -1 )
    }
    return (
        <div>
            <h1>{red}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;