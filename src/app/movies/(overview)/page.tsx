import CardList from "../../ui/movies/cardList";
import Data from "../../lib/data";
import { Suspense } from "react";




export default function Home({ searchParams }: { searchParams?: { title?: string; rated?: string; page?: number } }) {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
        <FetchCardListData searchParams={searchParams}/>
    </Suspense>
    
    </div>
  );
}
async function FetchCardListData({ searchParams }: { searchParams?: { title?: string; rated?: string; page?: number } }){
  /*await new Promise((resolve) => setTimeout(resolve, 3000));*/
  const movieList = await Data.fetchMovies(searchParams?.page, searchParams?.title, searchParams?.rated);

  return (<CardList movies={movieList}/>);
}
