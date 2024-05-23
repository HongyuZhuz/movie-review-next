'use client'
import MovieDetial from "@/app/ui/movieDetail/movieDetial";
import { movieDetailSkeleton } from "@/app/ui/skeleton/movie-card-skeleton";
import { Suspense } from "react";


export default  function Home() {
    return (
        <Suspense fallback={movieDetailSkeleton}>
            <MovieDetial/>
        </Suspense>
    )
    }