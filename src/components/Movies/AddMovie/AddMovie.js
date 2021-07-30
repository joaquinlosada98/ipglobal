import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actSetTitle } from '../../../store/action-creators';
import './style.css';

const AddMovies = () => {
    const dispatch = useDispatch();

    const [inputVal, setInputVal] = useState('')
    const handleInputChange = (e) => {
        setInputVal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputVal.trim().length){
       
            // Dispatch to Store 
            dispatch(actSetTitle(inputVal))

            // Clear Input value
            setInputVal('')
        }
        
    }
    
    return (
        <form onSubmit={handleSubmit} className="formInput">
            <h3>Add a new Movie: </h3>
            <input 
                className="Input"
                type="text"
                value={inputVal}
                placeholder="Search Movie ..."
                onChange={handleInputChange}
            />
        </form>
        
    )
}

export default AddMovies