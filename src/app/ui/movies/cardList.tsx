import React from "react"
import {movieList} from '../../lib/placeholder-data'
import Card from "./card"

export default function CardList () {
    console.log(movieList)
    return(
    <div>
        <Card/>
    </div>)
}