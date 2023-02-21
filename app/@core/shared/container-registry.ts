import 'reflect-metadata';
import { MoviesHttpGateway } from '../usecases/movies/infra/gateways/movies-http-gateway';
import http from './infra/http';
import { Container } from 'inversify';
import { MovieUsecase } from '~/@core/usecases/movies/application/movie-usecase';

export const container = new Container();

export const Registry = {
  AxiosAdapter : Symbol.for('AxiosAdapter'),

  MovieHttpGateway: Symbol.for('MovieGateway'),

  MovieUseCase: Symbol.for('MovieUseCase'),
}

// ### HTTp
container.bind(Registry.AxiosAdapter).toConstantValue(http);

// ### GATEWAYS
container.bind(Registry.MovieHttpGateway).toDynamicValue((context)=> {
  return new MoviesHttpGateway(context.container.get(Registry.AxiosAdapter));
});


// ### USECASES
container.bind(Registry.MovieUseCase).toDynamicValue((context)=> {
  return new MovieUsecase(context.container.get(Registry.MovieHttpGateway));
})


