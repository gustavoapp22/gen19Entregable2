import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

const Emoji = () => {
    
    const [ rap, setRap ] = useState({});

    useEffect(() => {
      axios.get("https://api.emojisworld.fr/v1/random")
         .then(res => setRap(res.data));
    }, [])

    const user = () => {
        axios.get("https://api.emojisworld.fr/v1/random")
        .then(res => setRap(res.data));
    }
    console.log(rap);

    return (
        <div>
            <h1>Hola</h1>
            <h1>{rap.results?.[0].name}</h1>
            <h1>{rap.results?.[0].emoji}</h1>
            <button onClick={user}>cambiar</button>
        </div>
    );
};

export default Emoji;