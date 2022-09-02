import React from 'react';
import propTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState(() => ({ [name]: value }));
  }

  submit() {
    this.props.onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitleInput() {
    return (
      <div>
        <label
          htmlFor="title-input"
          data-testid="title-input-label"
        >Título
        </label>
        <input
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.onChange}
          data-testid="title-input"
        />
      </div>
    );
  }

  renderSubtitleInput() {
    return (
      <div>
        <label
          htmlFor="subtitle-input"
          data-testid="subtitle-input-label"
        >Subtítulo
        </label>
        <input
          name="subtitle"
          type="text"
          value={this.state.subtitle}
          onChange={this.onChange}
          data-testid="subtitle-input"
        />
      </div>
    );
  }

  renderImageInput() {
    return (
      <div>
        <label
          htmlFor="image-input"
          data-testid="image-input-label"
        >Imagem
        </label>
        <input
          name="imagePath"
          type="text"
          value={this.state.imagePath}
          onChange={this.onChange}
          data-testid="image-input"
        />
      </div>
    );
  }

  renderStorylineTextarea() {
    return (
      <div>
        <label
          htmlFor="storyline-input"
          data-testid="storyline-input-label"
        >Sinopse
        </label>
        <input
          name="storyline"
          type="text"
          value={this.state.storyline}
          onChange={this.onChange}
          data-testid="storyline-input"
        />
      </div>
    );
  }

  renderRantingInput() {
    return (
      <div>
        <label
          htmlFor="rating-input"
          data-testid="rating-input-label"
        >Avaliação
        </label>
        <input
          name="rating"
          type="number"
          value={this.state.rating}
          onChange={this.onChange}
          data-testid="rating-input"
        />
      </div>
    );
  }

  renderGenderSelect() {
    return (
      <div>
        <label
          htmlFor="genre-input"
          data-testid="genre-input-label"
        >Gênero
        </label>
        <select
          name="genre"
          value={this.state.genre}
          onChange={this.onChange}
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </div>
    );
  }

  renderButton() {
    return (
      <div>
        <button
          data-testid="send-button"
          onClick={this.submit}
        >Adicionar filme
        </button>
      </div>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImageInput()}
        {this.renderStorylineTextarea()}
        {this.renderRantingInput()}
        {this.renderGenderSelect()}
        {this.renderButton()}
      </form>
    );
  }
}

AddMovie.defaultProps = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
  onChange: () => {},
  submit: () => {},
  onClick: () => {},
};

AddMovie.propTypes = { onClick: propTypes.func };

export default AddMovie;
