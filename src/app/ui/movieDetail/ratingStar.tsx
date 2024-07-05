'use client'
import { Rating } from '@douyinfe/semi-ui';

export function RateStar ({rating=0}:{rating:number}) {
    const roundedRating = roundToHalf(rating);
    return(
        <div>
            <Rating disabled defaultValue={roundedRating} allowHalf/>
        </div>
    )
}

export function RateStarReview ({rating=0}:{rating:number}) {
    const roundedRating = roundToHalf(rating);
    return(
        <div>
            <Rating disabled defaultValue={roundedRating} allowHalf size={"small"} className=''/>
        </div>
    )
}

function roundToHalf(rating: number): number {
    return Math.round(rating/2 * 2) / 2;
}

interface EditableRateStarProps {
    handleChange: (rating: number) => void;
}
export function EditableRateStar ({handleChange}:EditableRateStarProps) {
    const handleEvent = (e:number) =>{
        handleChange(e);
    }

    return(
        <div>
            <Rating defaultValue={0} onChange={handleEvent}/>
        </div>
    )
}