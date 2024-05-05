
import FetchCardListData from "@/app/ui/movies/fetchCardList";
import { fetchMovies } from "@/app/lib/data";
import { Suspense } from "react";


export default function Home({ searchParams }: { searchParams?: { title?: string; rated?: string; page?: number } }) {
  const page = searchParams?searchParams.page:undefined;
    const title = searchParams?searchParams.title:undefined;
    const rated = searchParams?searchParams.rated:undefined;
    console.log("here "+" page: "+page +" title: " +title+" rated: "+rated)
    

  return (
    <div>
        <FetchCardListData page={page} title={title} rated={rated} />
        
    </div>
  );
}
