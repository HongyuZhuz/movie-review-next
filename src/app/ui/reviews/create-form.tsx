import { Button } from '@/app/ui/button';

import { createReview } from '@/app/lib/actions';



export default function Form ({id}:{id:string}) {
    const createInvoiceWithId = createReview.bind(null, id)
    return (
        <form action={createInvoiceWithId}>
            <input id = "review" name = "review" placeholder="Enter your review">
            </input>            
            <Button type="submit">Create Review</Button>
        </form>
    )
}