'use client'
import { Review } from "@/app/lib/definition";
import { DeleteReview } from "../button";
import { EditReviewButton } from "../button";
import { useState } from "react";
import { SubmitEditButton , CancelEditButton} from "../button";
import { updateReview } from "@/app/lib/data";



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
      await updateReview(review._id, updatedReview);
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
                          <div className="text-sm text-gray-600">{new Date(review.date).toISOString().split('T')[0]}</div>
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