import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";


export  default function Pagination({totalNumMovies,moviesPerPage}:{totalNumMovies:number,moviesPerPage:number}) {
    const pageNum = Math.ceil(totalNumMovies/ moviesPerPage);
    const currentPath = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const buttons = Array.from({ length: pageNum }, (_, index) => index + 1).map(page => {
        params.set('page',(page-1).toString())
        return(<Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        key={page} onClick={() => console.log(`Go to page ${page}`)}
        href={`${currentPath}?${params.toString()}`}>
          Page {page}
        </Link>
      )})
    return(
        <div className="flex space-x-2 mt-3">{buttons}</div>
    )
}