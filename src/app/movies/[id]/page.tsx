'use client'
import { usePathname } from "next/navigation";
import Data from "@/app/lib/data";

export default async function Home() {
    const pathname=usePathname();
    const id = pathname.replace("/movies/","");
    const movie = await Data.fetchMovieById(id);

      return (
        <div>
          <div>
            {movie.title}
          </div>
          <div>

          </div>
        </div>
      );
    }