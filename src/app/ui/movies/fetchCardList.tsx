'use client'
import React from "react"
import CardList from "./cardList"
import { Movie } from "@/app/lib/definition"
import { fetchMovies } from "@/app/lib/data"
import { useState, useEffect } from "react"

export default function FetchCardListData({page,title,rated}:{page?:number,title?:string,rated?:string}) {
    const [movieList, setMovieList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const response = await fetchMovies(page,title,rated);
        setMovieList(response); 
      } catch (error) {
        console.error("Fetching movies failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, title, rated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <CardList movies={movieList} />;
  }