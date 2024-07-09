import { EditedForm } from "@/app/ui/reviews/create-form";
import { fetchReviewById, updateReview } from "@/app/lib/data";
export default async function Home({params}:{params:{id:string,reviewId:string}}) {
    const id = params.id;
    const reviewId = params.reviewId

    const review = (await fetchReviewById(reviewId)).review
    let updateReview
    
    if (typeof(review) === 'string'){
      updateReview = {
        star:0,
        title:"Untitled",
        description:review
      }
    } else{
      updateReview = review
    }


      console.log("start form")
        return (
          <div className="flex justify-center rounded-md shadow-lg p-10 items-center m-3">
            <EditedForm id = {id} reviewId={reviewId} review={updateReview}/>
          </div>
        );
      }