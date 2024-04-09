'use client'
import React from 'react'; 

export default function Form() {
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("aaaaa");
        console.log(e.target.value); 
    };

    return (
        <div>
            <input
                type="text"
                placeholder="movie name"
                onChange={handleNameChange} 
            />
            <input type="text" />
            <button>search</button>
        </div>
    );
}