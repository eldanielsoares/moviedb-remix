/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Movies } from "../domain/entities/movies";
import { MoviesGateway } from "../domain/gateways/movies.gateway";

export class MovieUsecase {
  constructor (private moviesGateway: MoviesGateway){}

  async execute(): Promise<Movies>{
    return this.moviesGateway.findAll();
  }
}