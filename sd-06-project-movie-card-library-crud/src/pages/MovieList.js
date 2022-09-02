import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components'

class MovieList extends Component {
  constructor() {
    super();
    this.isLoadingStateFunc = this.isLoadingStateFunc.bind(this);

    this.state = {
      movies: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.isLoadingStateFunc();
  }
  // chamamos a funcao isLoadingStateFunc dentro de componentDidMount
  // pois esta ultima nao aceita usarmos o setState dentro dela

  isLoadingStateFunc() {
    this.setState({
      isLoading: true,
    }, async () => {
      const requestMovies = await movieAPI.getMovies();

      this.setState({
        movies: requestMovies,
        isLoading: false,
      })
    })
  }
  // Na funcao isLoadingStateFunc alteramos o state de
  // isLoading para true, antes de chamar a funcao
  // movieAPI.getMovies. Apos chamarmos a funcao, quando ela
  // trouxer a sua resposta o isLoading sera falso e nao
  // sera renderizado, devido ao ternario colocado na funcao render

  render() {
    const { movies } = this.state;
    const { isLoading } = this.state;

    return (
      <div data-testid="movie-list">
        { isLoading ? <Loading /> : movies
        .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
