import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EvaluationCard extends Component {
  render() {
    const { evaluation } = this.props;
    return (
      <div>
        <p>{evaluation.name}</p>
        <p>{evaluation.email}</p>
        <p>{evaluation.evaluation}</p>
        <p>{evaluation.rating}</p>
      </div>
    );
  }
}

EvaluationCard.propTypes = {
  evaluation: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EvaluationCard;
