import { Divider } from "@douyinfe/semi-ui"
import Link from "next/link";
import { IconPlus } from '@douyinfe/semi-icons';
import { Review } from "@/app/lib/definition";
import { DeleteReview } from "../button";
import { EditReviewButton } from "../button";
import { useState } from "react";
import { SubmitEditButton , CancelEditButton} from "../button";
import { updateReview } from "@/app/lib/data";

export function CreateReview({id}:{id:string}){

    return(
        <div>
            <Divider margin='12px'/>
            <h1>Reviews</h1>
            <Link
        href={`/movies/${id}/review/create` }
        className="flex h-10 items-center rounded-lg bg-sky-600 px-4 text-sm font-medium text-white transition-colors hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 max-w-60"
      >
        <span className="hidden md:block">Create Review</span>{' '}
        <IconPlus className="h-5 md:ml-4"/>
      </Link>
        </div>
    )
}

export function MovieReview ({review,id}:{review:Review, id:string}) {
  const [editing, setEditing] = useState(false);
  const [reviewContent,setReviewContent] = useState(review.review)
  const [input,setInput] = useState(review.review)

  const handleClick = () =>{
    setEditing(!editing);
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedReview = input;
    setReviewContent(updatedReview);
    setEditing(false);
    await updateReview(id, updatedReview);
  };
  const handleChange = (e:any)=>{
    setInput(e.target.value)
  }
  
  return(
    <div key={review._id} className="flex flex-row border p-2 m-2 justify-between">
              <div  className="">
                <div className="font-bold">{review.name}</div>
                {editing ? (
                        <form className="flex flex-row" onSubmit={handleSubmit}>
                          <input id = "review" name = "review" className="border-gray-200 rounded-md"defaultValue={input} onChange={handleChange} value={input}></input>
                          <SubmitEditButton />
                          <CancelEditButton handleClick = {handleClick}/>
                        </form>
                      ) : (
                        <div>
                        <div>{reviewContent}</div>
                        <div className="text-sm text-gray-600">{new Date(review.date).toLocaleDateString()}</div>
                    </div>
                      )}
              </div>
              {editing?(<div></div>):(<div className="flex flex-row items-center">
                <EditReviewButton handleClick={handleClick}/>
                <DeleteReview reviewId ={review._id} id = {id}/>
              </div>)}
              
    </div>
  )
  
}