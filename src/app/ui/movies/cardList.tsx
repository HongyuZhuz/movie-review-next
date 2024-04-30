import React from "react"
import Card from "./card"
import { Movie } from "@/app/lib/definition"

export default function CardList ({movies}:{movies:Movie[]}) {
    return(
    <div className="flex flex-wrap gap-4 mt-4 justify-evenly mx-4">
        {movies.map((movie=>{
            return <Card key = {movie._id} movie={movie}/>
        }))}
        
    </div>)
}