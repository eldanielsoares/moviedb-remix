/* eslint-disable @typescript-eslint/consistent-type-imports */
import { AxiosInstance } from "axios";
import { Movies } from "../../domain/entities/movies";
import { MoviesGateway } from "../../domain/gateways/movies.gateway";

export class MoviesHttpGateway implements MoviesGateway {
  constructor (private http: AxiosInstance){}
  async findAll(): Promise<Movies> {
    const {data} = await this.http.get('/trending/movie/week?api_key=5f1691433bb484fe433e96eb8236f954&language=pt-BR&page=1');
    return data;
  }
  
}