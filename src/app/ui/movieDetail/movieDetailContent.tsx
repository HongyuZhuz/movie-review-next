import Image from "next/image"
import { RateStar } from "./ratingStar"
import { CreateReviewButton } from "../button"
export function MovieDetialContent ({id,title,fullplot,rating,poster,directors}:{id:string,title:string,fullplot:string,rating:number,poster:string,directors:string[]}){
    return(
        
      <div className="flex md:flex-row max-w-[1280px] mb-20 p-4 flex-col">
        <div className=" hidden md:block justify-center items-center w-[625px] h-[613px] ">
          <Image 
                  className=" " 
                  src={poster} 
                  alt={poster}
                  width={625}
                  height={613}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                }}
                />
        </div>
        <Image 
                  className=" md:hidden p-10" 
                  src={poster} 
                  alt={poster}
                  width={625}
                  height={613}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                }}/>

      <div className="flex flex-col md:max-w-[515px] mx-3 md:mx-0 flex-1">
        <div className=" md:text-4xl  text-2xl mb-4">
          {title}
        </div>
        <div className=" mb-4 flex flex-row" >
          <RateStar rating={rating}/>
          <p className="ml-2">{rating}</p>
        </div>
        <div className=" text-gray-500 mb-4">
          {directors}
        </div>
        <div className="mb-4">
        {fullplot ? <div>{fullplot}</div> : <div className="text-gray-500">no description</div>}
        </div>
        <div>
          <CreateReviewButton id  = {id}/>
        </div>
      </div>
      </div>
    )
}

