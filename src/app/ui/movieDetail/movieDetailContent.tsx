import Image from "next/image"
export function MovieDetialContent ({title,fullplot,cast,poster}:{title:string,fullplot:string,cast:string[],poster:string}){
    return(
        
        <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="text-lg">
          {title}
        </div>
        <div className="flex flex-col md:flex-row justify-center flex-auto">
          <div className=" flex justify-center md:max-h-96 border-4">
          <Image 
                className="self-center shadow-lg " 
                src={poster} 
                alt="Picture of the movie"
                width={150}
                height={240}
              />
          </div>
          <div className="md:w-1/2 p-4 flex flex-col flex-1">
            <div className=" max-w-80">
            <h1>Description</h1>
            <div>
              {fullplot}
            </div>
            <div>
              {cast}
            </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    )
}