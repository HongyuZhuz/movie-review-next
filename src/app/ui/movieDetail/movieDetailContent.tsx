import Image from "next/image"
import { RateStar } from "./ratingStar"
export function MovieDetialContent ({title,fullplot,rating,poster,directors}:{title:string,fullplot:string,rating:number,poster:string,directors:string[]}){
    return(
        
      <div className="flex flex-row max-w-[1280px] mb-20 p-4">
        <div className=" flex justify-center items-center w-[625px] h-[613px] mx-10">
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

      <div className="flex flex-col max-w-[515px]">
        <div className=" text-4xl mb-4">
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
      </div>
      </div>
    )
}

