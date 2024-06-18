import { Review } from "@/app/lib/definition";
import { MovieReview } from "./review";
export default function ReviewList ({reviews,movieId}:{reviews:Review[],movieId:string}) {
    return(
        <div>
            {Array.isArray(reviews) && reviews.length > 0 ? (
      <div>
        {reviews.map(review => (
          <MovieReview key={review._id} review={review} id={movieId}/>
        ))}
      </div>
    ) : null}
        </div>
    )
}