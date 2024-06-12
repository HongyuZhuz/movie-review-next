'use client'
import MovieDetial from "@/app/ui/movieDetail/movieDetial";
import { movieDetailSkeleton } from "@/app/ui/skeleton/movie-card-skeleton";
import { useEffect, useState,Suspense } from "react";
import { fetchMovieById } from "@/app/lib/data";
import { Movie } from "@/app/lib/definition";


export default  function Home({params}:{params:{id:string}}) {

    const { id } = params;
    const [movieData, setMovieData] = useState<Movie|undefined>();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const movie = await fetchMovieById(id);
          setMovieData(movie);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      };
  
      fetchData();
    }, [id]); 
    return (
        <Suspense fallback={movieDetailSkeleton}>
            {movieData?<MovieDetial data={movieData}/>:<div>Can't find page</div>}
        </Suspense>
    )
    }