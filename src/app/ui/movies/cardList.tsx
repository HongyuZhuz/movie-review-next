
import React from "react"
import Card from "./card"
import { Movie } from "@/app/lib/definition"


export   default function CardList ({movies}:{movies:Movie[]}) {
    console.log("rendering")
    return(
    <div className="flex flex-wrap gap-4 m-4  mx-4 md:justify-normal justify-center">
        {movies.map((movie=>{
            return <Card key = {movie._id} movie={movie}/>
        }))}
        
    </div>)
}