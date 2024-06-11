import { usePathname } from "next/navigation";
import { fetchMovieById } from "@/app/lib/data";
import Image from "next/image";
import Review from "./review";
import { IconEdit, IconDelete} from '@douyinfe/semi-icons'
import Link from "next/link";
import { DeleteReview } from "../button";

export default function MovieDetial() {

      return (
            <MovieDetailContent/>
      );
    }

async function MovieDetailContent () {
    const pathname=usePathname();
    const id = pathname.replace("/movies/","");
    const movie = await fetchMovieById(id);
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
          <Review id = {id}/>
          {Array.isArray(movie.reviews) && movie.reviews.length > 0 ? (
          <div>
            {movie.reviews.map(review => (
              <div className="flex flex-row border p-2 m-2 justify-between">
              <div key={review._id} className="">
                <div className="font-bold">{review.name}</div>
                <div>{review.review}</div>
                <div className="text-sm text-gray-600">{new Date(review.date).toLocaleDateString()}</div>
              </div>
              <div className="flex flex-row items-center">
                <Link className=" m-2 flex items-center rounded-md bg-gray-100 p-2 hover:bg-gray-200" href = "/"><IconEdit className=" text-sky-600"/></Link>
                <DeleteReview id ={review._id}/>
              </div>
              </div>
            ))}
          </div>
        ) : null}
          
        </div>
        </div>
    )
}