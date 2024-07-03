
import MovieDetial from "@/app/ui/movieDetail/movieDetial";
import { fetchMovieById } from "@/app/lib/data";



export default  async function Home({params}:{params:{id:string}}) {

    const { id } = params;
    
    const movie = await fetchMovieById(id);
 
    return (
        <div>
          <MovieDetial data={movie} movieId = {id}/>
        </div>
            
    )
    }