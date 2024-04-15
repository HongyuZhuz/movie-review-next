import { Movie } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";


export default function Card ({movie}:{movie:Movie}) {
    return(
        <Link className="flex-auto flex flex-col  justify-start border w-72 p-5 rounded-md border-sky-600 hover:bg-sky-200 shadow-xl" href={`/movies/${movie._id}`}>
    <div>
        
            {movie.poster?
                <Image className=" shadow-lg" src={movie.poster} alt="Picture of the movie" width={300} height={450} layout="responsive"></Image>:
                <Image className=" shadow-lg" src="/noimage.png" alt="Picture of the movie" width={300} height={450} layout="responsive"></Image>
            }
            <div className=" p-3 mt-3">
                <h2 className=" text-sky-500 text-xl">{movie.title}</h2>
                <p className="text-sky-500">{movie.rated}</p>
                <p>{movie.plot}</p>
            </div>
        
    </div>
    </Link>
)
}