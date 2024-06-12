import { usePathname } from "next/navigation";
import Image from "next/image";
import {CreateReview, MovieReview} from "./review";
import { Movie } from "@/app/lib/definition";

export default function MovieDetial({data}:{data:Movie}) {

      return (
            <MovieDetailContent movie = {data}/>
      );
    }


async function MovieDetailContent ({movie}:{movie:Movie}) {
    const pathname=usePathname();
    const id = pathname.replace("/movies/","");
  
    return(
        <div>
            <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-lg">
              {movie.title}
            </div>
            <div className="flex flex-col md:flex-row justify-center flex-auto">
              <div className=" flex justify-center md:max-h-96 border-4">
              <Image 
                    className="self-center shadow-lg " 
                    src={movie.poster||"/noimage.png"} 
                    alt="Picture of the movie"
                    width={150}
                    height={240}

                  />
              </div>
                  
              <div className="md:w-1/2 p-4 flex flex-col flex-1">
                <div className=" max-w-80">
                <h1>Description</h1>
                <div>
                  {movie.fullplot}
                </div>
                <div>
                  {movie.cast}
                </div>
                </div>
                
              </div>
            </div>
            
            
          </div>
          <br/>
          <CreateReview id = {id}/>
          {Array.isArray(movie.reviews) && movie.reviews.length > 0 ? (
          <div>
            {movie.reviews.map(review => (
              <MovieReview review={review} id={id}/>
            ))}
          </div>
        ) : null}
          
        </div>
        </div>
    )
}

