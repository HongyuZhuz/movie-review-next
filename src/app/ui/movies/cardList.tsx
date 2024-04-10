import React from "react"
import {movieList} from '../../lib/placeholder-data'
import Card from "./card"
import { Movie } from "@/app/lib/definition"

export default function CardList ({movies}:{movies:Movie[]}) {
    console.log(movieList)
    return(
    <div className="flex flex-wrap gap-4 mt-4">
        {movies.map((movie=>{
            return <Card movie={movie}/>
        }))}
        
    </div>)
}