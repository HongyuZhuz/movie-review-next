import { Button } from '@/app/ui/button';

export default function Form () {

    return (
        <form>
            <input id = "review" name = "review" placeholder="Enter your review">
            </input>            
            <Button type="submit">Create Review</Button>
        </form>
    )
}