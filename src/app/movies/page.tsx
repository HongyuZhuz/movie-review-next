import CardList from "../ui/movies/cardList";
import Form from "../ui/form";
import { movieList } from "../lib/placeholder-data";


export default function Home() {
  console.log("start form")
    return (
      <div>
        <div>
          <CardList movies ={movieList}/>
        </div>
      </div>
    );
  }