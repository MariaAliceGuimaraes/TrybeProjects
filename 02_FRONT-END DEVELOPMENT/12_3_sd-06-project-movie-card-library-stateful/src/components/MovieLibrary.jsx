import React, { Component } from 'react';
import propTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClickAddMovie = this.onClickAddMovie.bind(this);
    this.listFilterText = this.listFilterText.bind(this);
    this.listFilterBookmarked = this.listFilterBookmarked.bind(this);
    this.listFilterGenre = this.listFilterGenre.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onClickAddMovie(newMovie) {
    this.setState({ movies: this.state.movies.concat(newMovie) });
    // onClickAddMovie eh chamada pelo componente AddMovie no evento onClick
    // e o estado eh redefinido concatenando o novo filme dentro de movies
  }

  onSearchTextChange({ target: { value } }) {
    this.setState({ searchText: value }, () => {
      this.listFilterText(this.state.searchText);
      //
    });
  }

  onBookmarkedChange({ target: { checked } }) {
    this.setState({ bookmarkedOnly: checked }, () => {
      this.listFilterBookmarked(this.state.bookmarkedOnly);
    });
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({ selectedGenre: value }, () => {
      this.listFilterGenre(this.state.selectedGenre);
    });
  }

  listFilterText(filter) {
    const { movies } = this.props;
    this.setState({
      movies: movies.filter((movie) => {
        const { title, subtitle, storyline } = movie;
        return (title.includes(filter) || subtitle.includes(filter) || storyline.includes(filter));
      }).map((movie) => movie),
    });
  }

  listFilterBookmarked(filter) {
    const { movies } = this.props;
    this.setState({
      movies: movies
        .filter((movie) => movie.bookmarked === filter)
        .map((movie) => movie),
    });
  }

  listFilterGenre(filter) {
    const { movies } = this.props;
    if (filter === '') {
      this.setState({ movies: this.props.movies });
    } else {
      this.setState({
        movies: movies
          .filter((movie) => movie.genre === filter)
          .map((movie) => movie),
      });
    }
  }

  render() {
    const { onSearchTextChange, onBookmarkedChange, onSelectedgenreChange, onClickAddMovie } = this;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedgenreChange={onSelectedgenreChange}
        />
        <AddMovie onClick={onClickAddMovie} />
        <MovieList />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    storyline: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    imagePath: propTypes.string.isRequired,
    bookmarked: propTypes.bool,
    genre: propTypes.string,
  }).isRequired),
};

MovieLibrary.defaultProps = {
  movies: {
    title: '',
    subtitle: '',
    storyline: '',
    rating: 0,
    imagePath: '',
    genre: 'unknown',
    bookmarked: false,
  },
};

export default MovieLibrary;
