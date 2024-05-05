import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Pagination } from "@douyinfe/semi-ui";
import { pages } from "next/dist/build/templates/app-page";


export  default function MyPagination({totalNumMovies,moviesPerPage}:{totalNumMovies:number,moviesPerPage:number}) {
    const currentPath = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const {replace} = useRouter();

      const handlePageChange = (currentPage:number) =>{
        params.set('page',(currentPage-1).toString())
        replace(`${currentPath}?${params.toString()}`)
      }
    return(
        <div>
          <Pagination 
          showQuickJumper
          total= {totalNumMovies} 
          pageSize = {moviesPerPage} 
          style={{ marginBottom: 12 }} 
          onPageChange={handlePageChange}
          defaultCurrentPage={Number(params.get('page'))+1}></Pagination>
        </div>
    )
}

