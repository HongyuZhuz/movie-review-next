'use client'
import { usePathname } from "next/navigation";
import Data from "@/app/lib/data";
import Image from "next/image";

export default async function Home() {
    const pathname=usePathname();
    const id = pathname.replace("/movies/","");
    const movie = await Data.fetchMovieById(id);

      return (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-lg">
              {movie.title}
            </div>
            <div className="flex flex-row h-1/2">
              <div className="basis-1/2 relative">
                {movie.poster?
                    <Image className=" shadow-lg" src={movie.poster} alt="Picture of the movie"layout="fill" objectFit="cover"></Image>:
                    <Image className=" shadow-lg" src="/noimage.png" alt="Picture of the movie" width={300} height={450} layout="responsive"></Image>
                }
              </div>
              
              <div className="flex flex-col basis-1/2">
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


          <br/>

          <div className="reviewSection">
            <h1>
              Reviews
            </h1>
          </div>
        </div>
      );
    }