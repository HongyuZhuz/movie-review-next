import CardList from "../ui/movies/cardList";
import Form from "../ui/form";
import Data from "../lib/data";




export default async function Home({searchParams}:{searchParams?:{title?:string; rated?:string; page?:number}}) {

  const movieList = await Data.fetchMovies(searchParams?.page,searchParams?.title,searchParams?.rated);
    return (
      <div>
        <div>
          <CardList movies ={movieList}/>
        </div>
      </div>
    );
  }