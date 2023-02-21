import React from "react";
import type { IResults } from "~/@core/usecases/movies/domain/models/movies";

import { Container, Cover, MovieDetails } from "./styles";

interface CardProps {
  movie: IResults;
}

export const Card: React.FC<CardProps> = ({ movie }) => {
  return (
    <Container>
      <Cover src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
      <MovieDetails>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <section>
          <p>
            Nota: {movie.vote_average} - Votos: {movie.vote_count}
          </p>
        </section>
      </MovieDetails>
    </Container>
  );
};
