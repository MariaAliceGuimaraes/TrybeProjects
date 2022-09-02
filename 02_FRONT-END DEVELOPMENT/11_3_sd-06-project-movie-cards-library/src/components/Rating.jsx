import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return (
      <div className="rating">{this.props.rating}</div>
    );
  }
}

Rating.defaultProps = { rating: 0 };

Rating.propTypes = { rating: PropTypes.number };

export default Rating;
