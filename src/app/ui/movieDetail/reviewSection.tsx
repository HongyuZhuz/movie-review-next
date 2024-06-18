import { Review } from "@/app/lib/definition";
import { Divider } from "@douyinfe/semi-ui";
import { CreateReviewButton } from "../button";
import ReviewList from "../reviews/reviewList";
export default function ReviewSection ({movieId, reviews}:{movieId:string, reviews:Review[]}) {

    return(
        <div>
            <Divider margin='12px'/>
            <h1>Reviews</h1>
            <CreateReviewButton id = {movieId}/>
            <ReviewList reviews={reviews} movieId={movieId}/>
        </div>
    )
}