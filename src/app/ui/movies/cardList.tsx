
import React from "react"
import Card from "./card"
import { Movie } from "@/app/lib/definition"


export   default function CardList ({movies}:{movies:Movie[]}) {
    return(
    <div className="flex flex-wrap gap-4 m-4  mx-4 justify-center">
        {movies.map((movie=>{
            return <Card key = {movie._id} movie={movie}/>
        }))}
        
    </div>)
}