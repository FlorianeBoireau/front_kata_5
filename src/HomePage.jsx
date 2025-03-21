import React, { useState } from 'react';
import brocolis from './assets/broccoli-svgrepo-com.svg';
import './App.css'


const HomePage = ( ) => {
    
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Prénom soumis:', name);
    }

    return(
        <>
        <div className='container'>
            <div className='logo'>
                <img src={brocolis} alt="logo brocoli" />
                <h1>Bienvenue sur Adalicious</h1>
            </div>
            <div className='input'>
                <form onSubmit={handleSubmit}>
                    <label for="demande du prénom">pour commencer, peux-tu me donner ton prénom :</label>
                    <input 
                    name="query"
                    value={name}
                    onChange={handleChange} />
                    <button type="submit">Valider</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default HomePage