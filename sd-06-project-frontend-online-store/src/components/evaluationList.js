import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EvaluationCard from './evaluationCard';

class EvaluationList extends Component {
  render() {
    const { evaluations } = this.props;
    return (
      <div>
        { evaluations
          .map((e) => <EvaluationCard key={ e.id } evaluation={ e } />)}
      </div>
    );
  }
}

EvaluationList.propTypes = {
  evaluations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EvaluationList;
