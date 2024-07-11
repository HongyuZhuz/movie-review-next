import { Review } from "@/app/lib/definition";
import ReviewList from "../reviews/reviewList";
export default function ReviewSection ({movieId, reviews}:{movieId:string, reviews:Review[]}) {

    return(
        <div>
            <hr/>
            <h1 className="ml-3 text-2xl my-3 font-semibold">Reviews</h1>
            <ReviewList reviews={reviews} movieId={movieId}/>
        </div>
    )
}