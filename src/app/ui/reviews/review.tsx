'use client'
import { Review, ReviewDetail } from "@/app/lib/definition";
import { DeleteReview } from "../button";
import { EditReviewButton } from "../button";
import {RateStarReview } from "../movieDetail/ratingStar";
import { Avatar } from "@douyinfe/semi-ui";

export function MovieReview ({review,id}:{review:Review, id:string}) {
    
    return(
      <div key={review._id} className="flex flex-row border rounded-lg p-2 m-2 justify-between my-3">
                {/*review content ui*/}
                <ReviewUi review={review} id={id}/>
                
      </div>
    )
    
  }

  function ReviewUi ({review,id}:{review:Review, id:string}) {
    
    const handleClick = () =>{
      console.log("Clicked Edit")
    }


    let updatedReview:ReviewDetail
    if (typeof review.review ==='string'){
      updatedReview = {
        star: 0, 
        title: 'Untitled', 
        description: review.review
      };
    }else{
      updatedReview = review.review
    }

    return(
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <div className="ml-2">
          <RateStarReview rating={updatedReview.star}/>
          {updatedReview.title === "Untitled"?<h1 className=" text-2xl font-semibold text-gray-300 mt-3">{updatedReview.title}</h1>:<h1 className=" text-2xl font-semibold mt-3">{updatedReview.title}</h1>}
          <p className=" text-base">{updatedReview.description}</p>
          </div>
          
          <div className="flex flex-row justify-center items-center mt-3">
            <Avatar size="small" style={{ margin: 4 ,cursor: 'default' }} alt='User' hoverMask={null}>
              {review.name.toUpperCase()}
            </Avatar>
            <div className="flex flex-col ml-3">
              <h2 className=" text-base text-gray-500 font-semibold">{review.name}</h2>
              <p className="text-base text-gray-300 font-light">{new Date(review.date).toISOString().split('T')[0]}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start">
                  <EditReviewButton handleClick={handleClick} reviewId = {review._id} id = {id}/>
                  <DeleteReview reviewId ={review._id} id = {id}/>
        </div>
      </div>
    )
  }