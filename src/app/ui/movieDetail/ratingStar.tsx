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

function roundToHalf(rating: number): number {
    return Math.round(rating/2 * 2) / 2;
}