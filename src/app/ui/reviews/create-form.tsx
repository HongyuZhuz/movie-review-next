'use client'
import { Button } from '@/app/ui/button';
import { createReview } from '@/app/lib/actions';
import { EditableRateStar } from '../movieDetail/ratingStar';
import { useState } from 'react';



export default function Form ({id}:{id:string}) {
    const [star,useStar] = useState(0)

    const handleStarChange = (s:number) =>{
        useStar(s)
    }

    const createInvoiceWithId = createReview.bind(null, id)
    return (
        <form action={createInvoiceWithId}>
            <EditableRateStar handleChange={handleStarChange}/>
            <input id = "review" name = "review" placeholder="Enter your review">
            </input>
            <input type="hidden" name="star" value={star} />       
            <Button type="submit">Submit</Button>
        </form>
    )
}