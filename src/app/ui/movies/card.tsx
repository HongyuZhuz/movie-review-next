import { Movie } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";


export default function Card ({movie}:{movie:Movie}) {
    return(
    <div className="flex flex-col justify-center border w-72 p-5 rounded-md border-sky-600 hover:bg-sky-200 shadow-xl">
        {movie.poster?
        <Image className=" shadow-lg" src={movie.poster} alt="Picture of the movie" width='300' height='64'></Image>:"Picture of the movie"
        }
        <div className=" p-3 mt-3">
        <h2 className=" text-sky-500 text-xl">{movie.title}</h2>
        <p className="text-sky-500">{movie.rated}</p>
        <p>{movie.plot}</p>
        <Link className="text-sky-500"href={`/movies/${movie.id}`}>More details...</Link>
        </div>
        
    </div>
)
}