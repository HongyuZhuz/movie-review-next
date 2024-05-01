import CardList from "../../ui/movies/cardList";
import Form from "../../ui/form";
import Data from "../../lib/data";
import { Suspense } from "react";

export default async function Home({ searchParams }: { searchParams?: { title?: string; rated?: string; page?: number } }) {
  const movieList = await Data.fetchMovies(searchParams?.page, searchParams?.title, searchParams?.rated);

  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
        <CardList movies={movieList} />
    </Suspense>
    </div>
  );
}