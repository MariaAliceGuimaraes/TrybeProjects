import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StarButton extends Component {
  render() {
    const { ratingChange, active } = this.props;
    const text = active ? '★' : '☆';

    return (
      <button type="button" onClick={ ratingChange }>{ text }</button>
    );
  }
}

StarButton.propTypes = {
  ratingChange: PropTypes.number.isRequired,
  active: PropTypes.bool,
};

StarButton.defaultProps = {
  active: false,
};

export default StarButton;
