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
    return(
        <div>
            <Rating disabled defaultValue={rating} allowHalf size={"small"} className=''/>
        </div>
    )
}

function roundToHalf(rating: number): number {
    return Math.round(rating/2 * 2) / 2;
}

interface EditableRateStarProps {
    handleChange: (rating: number) => void;
    defaultRating: number;
  }
export function EditableRateStar ({handleChange,defaultRating}:EditableRateStarProps) {
    const handleEvent = (e:number) =>{
        handleChange(e);
    }

    return(
        <div>
            <Rating defaultValue={defaultRating} onChange={handleEvent}/>
        </div>
    )
}