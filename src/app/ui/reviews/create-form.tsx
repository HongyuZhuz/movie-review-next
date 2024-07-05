'use client'
import { Button } from '@/app/ui/button';
import { createReview } from '@/app/lib/actions';
import { EditableRateStar } from '../movieDetail/ratingStar';
import { useState } from 'react';



export default function Form ({id}:{id:string}) {
    const [star,setStar] = useState(0)

    const handleStarChange = (s:number) =>{
        setStar(s)
    }

    const createInvoiceWithId = createReview.bind(null, id)
    return (
        <form action={createInvoiceWithId}>
            <label className='text-base'>
                Rating
                <EditableRateStar handleChange={handleStarChange}/>
            </label>
            <div className='mb-2'>
            <label className='text-base'>
                Title
                <input 
                className='w-full p-2 border rounded-md'
                id = "title" name = "title" placeholder="Enter your review" type="text">
                </input>
            </label>
            </div>
            <div className='mb-2'>
            <label className='text-base'> Description
            <textarea id = 'review' name = 'review' placeholder="Enter your review"
            className='w-full p-2 border rounded-md'/>
            </label>
            </div>
            
            
            <input type="hidden" name="star" value={star} />       
            <Button type="submit">Submit</Button>
        </form>
    )
}