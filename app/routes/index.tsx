/* eslint-disable @typescript-eslint/consistent-type-imports */
import { container, Registry } from "~/@core/shared/container-registry";
import { MovieUsecase } from "~/@core/usecases/movies/application/movie-usecase";
import { Movies } from "~/@core/usecases/movies/domain/entities/movies";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Header } from "~/components/Header";
import { Container, Grid, Text } from "./styled";
import { Card } from "~/components/Card";

export const loader: LoaderFunction = async (): Promise<Movies> => {
  const usecase = container.get<MovieUsecase>(Registry.MovieUseCase);
  const movies = await usecase.execute();

  return movies;
};

export const Index = () => {
  const data = useLoaderData() as Movies;

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Header />
      <Container>
        <Text>Passe o mouse sobre o cartaz para vez os detalhes</Text>
        <Grid>
          {data.results.map((movie, key) => (
            <Card key={key} movie={movie} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Index;
