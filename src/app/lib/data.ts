import axios from "axios";
import { Movie } from "./definition";
import { error } from "console";
import { ApiFetchMovies } from "./definition";
export default class Data{
      static async fetchMovies(page:number=0):Promise<Movie[]> {
        try{
           const response = await axios.get<ApiFetchMovies>(`https://jb7iw7mjxgoabj2pm6v6qquoea0zkwli.lambda-url.us-east-1.on.aws/api/v1/movies?page=${page}`)
           const movieList = response.data.movies;
           console.log(movieList)
           return movieList

        }catch{
            console.error("fetch movieList failed:",error);
            throw error
        }
     }
}