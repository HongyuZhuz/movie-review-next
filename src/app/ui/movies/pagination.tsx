


export  default function Pagination({totalNumMovies,moviesPerPage}:{totalNumMovies:number,moviesPerPage:number}) {
    const pageNum = Math.ceil(totalNumMovies/ moviesPerPage);
    const buttons = Array.from({ length: pageNum }, (_, index) => index + 1).map(page => (
        <button key={page} onClick={() => console.log(`Go to page ${page}`)}>
          Page {page}
        </button>
      ));
    return(
        <div>{pageNum}</div>
    )
}