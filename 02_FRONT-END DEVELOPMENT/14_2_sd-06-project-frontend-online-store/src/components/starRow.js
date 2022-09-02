import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarButton from './starButton';

class StarRow extends Component {
  render() {
    const { rating, ratingChange, max } = this.props;
    const arr = Array.from(Array(max).keys());

    return (
      <div id="rating">
        {arr
          .map((i) => (<StarButton
            key={ i }
            ratingChange={ () => ratingChange(i + 1) }
            active={ i < rating }
          />))}
      </div>
    );
  }
}

StarRow.propTypes = {
  rating: PropTypes.number,
  ratingChange: PropTypes.func.isRequired,
  max: PropTypes.number,
};

StarRow.defaultProps = {
  rating: 0,
  max: 5,
};

export default StarRow;
