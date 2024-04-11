import CardList from "../ui/movies/cardList";
import Form from "../ui/form";
import Data from "../lib/data";


export default async function Home() {
  const movieList = await Data.fetchMovies();
    return (
      <div>
        <div>
          <CardList movies ={movieList}/>
        </div>
      </div>
    );
  }