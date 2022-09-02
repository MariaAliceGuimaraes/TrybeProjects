import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.isLoadingStateFunc = this.isLoadingStateFunc.bind(this);

    this.state = {
      movie: {},
      isLoading: true,
    };
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
      const { match } = this.props;
      const requestMovie = await movieAPI.getMovie(match.params.id);

      this.setState({
        movie: requestMovie,
        isLoading: false,
      });
    });
  }
  // Na funcao isLoadingStateFunc alteramos o state de
  // isLoading para true, antes de chamar a funcao
  // movieAPI.getMovies. Apos chamarmos a funcao, quando ela
  // trouxer a sua resposta o isLoading sera falso e nao
  // sera renderizado, devido ao ternario colocado na funcao render

  render() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { isLoading } = this.state;
    return (
      <div data-testid="movie-details">
        { isLoading ? <Loading /> : <div>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <h1>{`Title: ${title}`}</h1>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={() => { movieAPI.deleteMovie(id); }}>
            DELETAR
          </Link>
        </div>
        }
      </div>
    );
  }
}

export default MovieDetails;
