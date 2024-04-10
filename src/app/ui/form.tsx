'use client'
import React from 'react'; 
import {ratings} from '../lib/placeholder-data'

export default function Form() {
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value); 
    };

    return (
        <div className='flex py-5 justify-center flex-col mx-2'>
            <input
                type="text"
                placeholder="movie name"
                onChange={handleNameChange} 
                className='rounded-md my-.5'
            />
            <select defaultValue={"ALL"} className='rounded-md my-1'>
                {ratings.map((rating)=>{
                    return <option key={rating} value={rating}>{rating}</option>
                })}
            </select>
            <button className='bg-sky-500 text-white p-2 rounded-md hover:bg-sky-600'>search</button>
        </div>
    );
}