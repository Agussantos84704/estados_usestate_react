import React from 'react'
import { useState } from "react";

const NoteApp = () => {
    const [notes, setNotes] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddNote = () => {
        if (inputValue.trim() !== ''){
            setNotes([...notes, inputValue]);
            setInputValue('');

    }

};

const handleRemoveNote = (index) => {
    const updateNotes = [...notes];
    updateNotes.splice(index, 1);
    setNotes(updateNotes);

}
return (
    <div>
        <div>NoteApp</div>
        <input 
        type="text" 
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
        ></input>
        <button
        onClick={()=>{
            handleAddNote()
            console.log(notes);
            console.log(inputValue)
        }}>Add</button>

        <h2>Notes</h2>
        <ul>
            {notes.map((note, index)=>(
                <li key={index}>{note}  
                   
                    <button onClick={ ()=> {
                        handleRemoveNote(index)
                        console.log(notes);
                        console.log(inputValue)
                    }}> Remove </button>
                </li>
            )
            )}
        </ul>

    </div>
  )
};

export default NoteApp