// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { IMovies } from "../models/movies";

export class Movies {
  constructor (private props : IMovies){}

  get page(){
    return this.props.page;
  }

  get results(){
    return this.props.results;
  }


  toJSON(){
    return {
      page: this.page,
      results: this.results
    }
  }
}