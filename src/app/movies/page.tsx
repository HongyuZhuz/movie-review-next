import Form from "../ui/form";
import FetchCardListData from "@/app/ui/movies/fetchCardList";
import { ratings } from "../lib/placeholder-data";

export default function Home({ searchParams }: { searchParams?: { title?: string; rated?: string; page?: number } }) {
  const page = searchParams?searchParams.page:undefined;
    const title = searchParams?searchParams.title:undefined;
    const rated = searchParams?searchParams.rated:undefined;
    console.log("here "+" page: "+page +" title: " +title+" rated: "+rated)

  return (
    <div className="max-w-7xl flex justify-center flex-col">
      <Form ratings = {ratings}/>
        <FetchCardListData page={page} title={title} rated={rated}/>
    </div>
  );
}
