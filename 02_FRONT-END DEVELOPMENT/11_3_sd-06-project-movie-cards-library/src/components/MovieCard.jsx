import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-image">
        <img className="movie-card-title" src={this.props.movie.imagePath} alt="Movie Cover" />
        <h4 className="movie-card-title">{this.props.movie.title}</h4>
        <h5 className="movie-card-subtitle">{this.props.movie.subtitle}</h5>
        <p className="movie-card-storyline">{this.props.movie.storyline}</p>
        <Rating rating={this.props.movie.rating} />
      </div>
    );
  }
}

// aqui criamos o componente MovieCard que recebe a prop movie
// recebe a imagem de cada filme, titulo, subtitulo sinopse e rating

MovieCard.defaultProps = { movie: {} };

MovieCard.propTypes = {
  movie: PropTypes
  .objectOf(PropTypes
    .oneOfType([
      PropTypes.number,
      PropTypes.string,
    ])),
};

export default MovieCard;
