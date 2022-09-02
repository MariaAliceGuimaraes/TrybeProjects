import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={movie.imagePath} alt={movie.title} />
        <div className="movie-card-body">
          <h1 className="movie-card-title">{movie.title}</h1>
          <h2 className="movie-card-subtitle">{movie.subtitle}</h2>
          <p>{movie.storyline}</p>
        </div>
        <div className="movie-card-rating" data-testid="rating">
          <span className="rating">{movie.rating}</span>
        </div>
        <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

MovieCard.defaultProps = {
  movie: {
    id: 0,
    imagePath: '',
    rating: 0,
    title: '',
    subtitle: '',
  },
};

export default MovieCard;
