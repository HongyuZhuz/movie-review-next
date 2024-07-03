import { Movie } from "@/app/lib/definition";
import { MovieDetialContent } from "./movieDetailContent";
import ReviewSection from "./reviewSection";

export  default async function MovieDetial({data,movieId}:{data:Movie,movieId:string}) {

    const movie = data
    
    const fullplot = movie.fullplot ?? "";
    const poster = movie.poster ?? "/noimage.png";

      return (
        <div>
          <MovieDetialContent 
          title={movie.title} 
          fullplot = {fullplot}
          poster = {poster}
          rating = {movie.imdb.rating}
          directors = {movie.directors}/>
        {movie.reviews?<ReviewSection movieId ={movieId} reviews = {movie.reviews} />:<div/>}
    </div>
      );
    }