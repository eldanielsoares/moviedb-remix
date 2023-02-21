export interface IResults {
  adult: boolean;
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  popularity: number;
  release_date: Date;
  vote_average: number;
  vote_count: number;
}

export interface IMovies {
  page: number;
  results: IResults[];
}