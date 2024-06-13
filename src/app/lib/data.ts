'use server'
import axios from "axios";
import { Movie,ApiFetchMovies,ApiFetchMoviesReturn } from "./definition";
import { unstable_noStore as noStore } from 'next/cache';


export async function  fetchMovies(page:number=0 ,title:string="", rated:string=""):Promise<ApiFetchMoviesReturn> {
         noStore();
        try{
         console.log(`Fetching movies with page=${page}, title=${title}, rated=${rated}`);
           const response = await axios.get<ApiFetchMovies>(`https://jb7iw7mjxgoabj2pm6v6qquoea0zkwli.lambda-url.us-east-1.on.aws/api/v1/movies?page=${page}&title=${title}&rated=${rated}`)
           const movieList = response.data.movies;
           const totalNumMovies = response.data.total_results;
           const moviesPerPage = response.data.entries_per_page;
           console.log("fetchMovies")
           return {movieList,moviesPerPage,totalNumMovies}
        }catch(error){
            console.error("fetch movieList failed:",error);
            throw error
        }
     }

   export  async function fetchMovieById(id:string):Promise<Movie>{
      noStore();
      try{
         const response = await axios.get<Movie>(`https://jb7iw7mjxgoabj2pm6v6qquoea0zkwli.lambda-url.us-east-1.on.aws/api/v1/movies/id/${id}`)
         const movie = response.data;
         console.log(movie)
         return movie;
      }catch(error){
         console.error("fetch movie by id failed:",error);
         throw error
      }
     }
    export async function fetchRating ():Promise<Array<string>>{
      noStore();
      try{
         const response = await axios.get<Array<string>>(`https://jb7iw7mjxgoabj2pm6v6qquoea0zkwli.lambda-url.us-east-1.on.aws/api/v1/movies/ratings`);
         const ratings = response.data;
         return ratings;
      }catch(error){
         console.error("fetch ratings failed:", error);
         throw error;
      }
     }

     export async function updateReview(id: string, review: string) {
      const data = {
        review: review,
        movie_id: id,
        user_id: "123",
        name: "z"
      };
      
      try {
        const response = await axios.put("https://jb7iw7mjxgoabj2pm6v6qquoea0zkwli.lambda-url.us-east-1.on.aws/api/v1/movies/review", data);
        console.log("submitted");
        console.log(review);
        console.log(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('AxiosError:', error.message);
          console.error('Error config:', error.config);
          console.error('Error request:', error.request);
          console.error('Error response:', error.response);
        } else {
          console.error('Unexpected error:', error);
        }
        throw error;
      }
    }