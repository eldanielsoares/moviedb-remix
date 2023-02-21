// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Movies } from "../entities/movies";

export interface MoviesGateway {
  findAll(): Promise<Movies>
}