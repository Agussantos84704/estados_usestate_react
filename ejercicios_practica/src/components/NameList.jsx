import React from 'react'
import { useState } from "react";

const NameList = () => {
    const [names, setNames] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddName = () => {
        if (inputValue.trim() !== '') {
            setNames([...names, inputValue]);
            setInputValue('');
        }
        
    };

    const handleRemoveNames = (index) => {
        const updateNames= [...names];
        updateNames.splice(index, 1);
        setNames(updateNames);}

    return (
        <div>

        <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
            >
        </input>

        <button onClick={() => {
            handleAddName();
            console.log(names);
            console.log(inputValue);
        }}
        > Agregar Nombre </button>

         <h2>Lista de nombres</h2>
         <ul>
            {names.map((name, index) => (
                <li key={index} >{name} <button onClick={ ()=> {
                    handleRemoveNames(index)
                    console.log(names);
                    console.log(inputValue)
                }}> Remove </button>
                </li>
            ))}
         </ul>
         </div>

    );

};


export default NameList
