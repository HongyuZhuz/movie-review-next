'use client'
import { Movie } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default  function Card ({movie}:{movie:Movie}) {
    const [imageUrl, setImageUrl] = useState(movie.poster || '/noimage.png');
    const handleImageError = () =>{
      setImageUrl('/noimage.png');
    }

    return(
        <Link className="flex-auto flex flex-col  justify-start border w-72 p-5 rounded-md border-sky-600 hover:bg-sky-200 shadow-xl max-w-80" href={`/movies/${movie._id}`}>
    <div>
        
        <Image 
        className=" shadow-lg" 
        src={imageUrl}
        alt="/noimage.png" 
        width={300} 
        height={450} 
        layout="responsive"
        onError={handleImageError}/>

            <div className=" p-3 mt-3">
                <h2 className=" text-sky-500 text-xl">{movie.title}</h2>
                <p className="text-sky-500">{movie.rated}</p>
                <p>{movie.plot}</p>
            </div>
        
    </div>
    </Link>
)
}
