import { Movie } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";


export default async function Card ({movie}:{movie:Movie}) {
    let movieData = await fetchMovieData(movie);

    return(
        <Link className="flex-auto flex flex-col  justify-start border w-72 p-5 rounded-md border-sky-600 hover:bg-sky-200 shadow-xl" href={`/movies/${movie._id}`}>
    <div>
        
        <Image 
        className=" shadow-lg" 
        src={movieData.poster||'/noimage.png'} 
        alt="Picture of the movie" 
        width={300} 
        height={450} 
        layout="responsive"/>

            <div className=" p-3 mt-3">
                <h2 className=" text-sky-500 text-xl">{movieData.title}</h2>
                <p className="text-sky-500">{movieData.rated}</p>
                <p>{movieData.plot}</p>
            </div>
        
    </div>
    </Link>
)
}

async function fetchMovieData(movieData:Movie) {
    if (movieData.poster){
        movieData.poster = await checkImageURL(movieData.poster) ? movieData.poster : '/noimage.png';
    }
    return movieData;
  }
  
  
async function checkImageURL(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }