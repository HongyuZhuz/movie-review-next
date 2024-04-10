export type Movie = {
    id: string,
    plot: string,
    genres: string[],
    runtime: number,
    cast: string[],
    num_mflix_comments: number,
    poster?: string, // 由于不是所有的电影都有 poster，所以这里使用了可选属性
    title: string,
    fullplot?: string,
    languages: string[],
    released: string, // 日期通常是字符串格式，但可以根据需要转换为 Date 类型
    directors: string[],
    writers?: string[], // 可能不是所有的电影都有 writers，所以这里使用了可选属性
    awards: {
      wins: number,
      nominations: number,
      text: string,
    },
    lastupdated: string, // 日期通常是字符串格式，但可以根据需要转换为 Date 类型
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
      lastUpdated?: string, // 可能不是所有的电影都有 lastUpdated，所以这里使用了可选属性
      dvd?: string, // 可能不是所有的电影都有 dvd，所以这里使用了可选属性
      website?: string, // 可能不是所有的电影都有 website，所以这里使用了可选属性
      production?: string, // 可能不是所有的电影都有 production，所以这里使用了可选属性
    },
    rated?: string, // 可能不是所有的电影都有 rated，所以这里使用了可选属性
  };