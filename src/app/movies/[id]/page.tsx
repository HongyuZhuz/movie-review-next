'use client'
import MovieDetial from "@/app/ui/movieDetail/movieDetial";
import { movieDetailSkeleton } from "@/app/ui/skeleton/movie-card-skeleton";
import { Suspense } from "react";
import Review from "@/app/ui/movieDetail/review";


export default  function Home({params}:{params:{id:string}}) {
    const id = params.id;
    return (
        <Suspense fallback={movieDetailSkeleton}>
            <MovieDetial/>
        </Suspense>
    )
    }