export interface Movie {
    _id: string,
    plot: string,
    genres: string[],
    runtime: number,
    cast: string[],
    num_mflix_comments: number,
    poster?: string, 
    title: string,
    fullplot?: string,
    languages: string[],
    released: string, 
    directors: string[],
    writers?: string[], 
    awards: {
      wins: number,
      nominations: number,
      text: string,
    },
    lastupdated: string, 
    year: number,
    imdb: {
      rating: number,
      votes: number,
      id: number,
    },
    countries: string[],
    type: string,
    tomatoes: {
      viewer: {
        rating: number,
        numReviews: number,
        meter: number,
      },
      lastUpdated?: string, 
      dvd?: string, 
      website?: string, 
      production?: string, 
    },
    rated?: string, 
  };


  export interface ApiFetchMovies{
      movies:Movie[],
      total_results:number
  }
  export interface ApiFetchMoviesReturn{
    movieList:Movie[],
    totalNumMovies:number
}

  export interface SideNavProps{
    ratings:Array<string>;
  }