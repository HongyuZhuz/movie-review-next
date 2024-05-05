'use client'
import { usePathname } from "next/navigation";
import { fetchMovieById } from "@/app/lib/data";
import Image from "next/image";
import { Suspense } from "react";
import { movieDetailSkeleton } from "../skeleton/movie-card-skeleton";

export default function MovieDetial() {

      return (
        <Suspense fallback={movieDetailSkeleton}>
            <MovieDetailContent/>
        </Suspense>
        
      );
    }

async function MovieDetailContent () {
    const pathname=usePathname();
    const id = pathname.replace("/movies/","");
    const movie = await fetchMovieById(id);
    return(
        <div>
            <div className="flex flex-col">
          <div className="flex flex-col h-screen">
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

          <div className="reviewSection">
            <h1>
              Reviews
            </h1>
          </div>
        </div>
        </div>
    )
}