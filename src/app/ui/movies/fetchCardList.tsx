'use client'
import React from "react"
import CardList from "./cardList"
import { Movie } from "@/app/lib/definition"
import { fetchMovies } from "@/app/lib/data"
import { useState, useEffect } from "react"
import Pagination from "./pagination"

export default function FetchCardListData({page,title,rated}:{page?:number,title?:string,rated?:string}) {
    const [movieList, setMovieList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalNumMovies,setTotalNumMovies] = useState<number>(0);
  const [moviesPerPage, setMoviesPerPage] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const response = await fetchMovies(page,title,rated);
        setMovieList(response.movieList); 
        setTotalNumMovies(response.totalNumMovies);
        setMoviesPerPage(response.moviesPerPage);
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

  return (
    <div>
      <Pagination totalNumMovies={totalNumMovies} moviesPerPage={moviesPerPage}/>
      <CardList movies={movieList} />
    </div>
  
);
  }