import CardList from "../ui/movies/cardList";
import Form from "../ui/form";
import { movieList } from "../lib/placeholder-data";
import Data from "../lib/data";


export default async function Home() {
  const movieLists = Data.fetchMovies(0);
    return (
      <div>
        <div>
          <CardList movies ={movieList}/>
        </div>
      </div>
    );
  }