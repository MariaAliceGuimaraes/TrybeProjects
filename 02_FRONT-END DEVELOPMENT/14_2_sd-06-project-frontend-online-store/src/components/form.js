import React, { Component } from 'react';
import StarRow from './starRow';
import EvaluationList from './evaluationList';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      evaluation: '',
      name: '',
      email: '',
      evaluations: [],
    };
    this.textInputChange = this.textInputChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
  }


  textInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  ratingChange(rating) {
    this.setState({
      rating,
    });
  }

  handleAddSubmit() {
    const { name, email, evaluation, rating, evaluations } = this.state;

    const objNewEvaluation = {
      id: evaluations.length + 1,
      name,
      email,
      evaluation,
      rating,
    };

    this.setState({
      rating: 0,
      evaluation: '',
      name: '',
      email: '',
      evaluations: evaluations.concat([objNewEvaluation]),
    });
  }

  render() {
    const { rating, evaluation, name, email, evaluations } = this.state;
    return (
      <div>
        <fieldset>
          <form>
            <label htmlFor="name" name="name">
              Nome:
              <input
                id="name"
                type="text"
                placeholder="Seu nome"
                onChange={ this.textInputChange }
                name="name"
                value={ name }
              />
            </label>
            <label htmlFor="email" name="email">
              Email:
              <input
                id="email"
                type="email"
                placeholder="Seu email"
                onChange={ this.textInputChange }
                name="email"
                value={ email }
              />
            </label>
            <label htmlFor="evaluation" name="evaluation">
              Comentário:
              <textarea
                id="evaluation"
                data-testid="product-detail-evaluation"
                type="text"
                placeholder="Deixe seu comentário"
                onChange={ this.textInputChange }
                name="evaluation"
                value={ evaluation }
              />
            </label>
            <StarRow
              id="rating"
              ratingChange={ this.ratingChange }
              rating={ rating }
            />
            <button type="button" onClick={ this.handleAddSubmit }>Enviar</button>
          </form>
          <EvaluationList evaluations={ evaluations } />
        </fieldset>
      </div>
    );
  }
}

export default Form;
