import { Review } from "@/app/lib/definition";
import ReviewList from "../reviews/reviewList";
export default function ReviewSection ({movieId, reviews}:{movieId:string, reviews:Review[]}) {

    return(
        <div>
            <hr/>
            <h1>Reviews</h1>
            <ReviewList reviews={reviews} movieId={movieId}/>
        </div>
    )
}