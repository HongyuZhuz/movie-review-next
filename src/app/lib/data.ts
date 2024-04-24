import axios from "axios";
import { Movie,ApiFetchMovies } from "./definition";
import { error } from "console";

export default class Data{
      static async fetchMovies(page:number=0 ,title:string="", rated:string=""):Promise<Movie[]> {
        try{
           const response = await axios.get<ApiFetchMovies>(`https://jb7iw7mjxgoabj2pm6v6qquoea0zkwli.lambda-url.us-east-1.on.aws/api/v1/movies?page=${page}&title=${title}&rated=${rated}`)
           const movieList = response.data.movies;
           return movieList
        }catch(error){
            console.error("fetch movieList failed:",error);
            throw error
        }
     }

     static async fetchMovieById(id:string):Promise<Movie>{
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
}