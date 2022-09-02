import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from './form';

export default class productPage extends Component {
  render() {
    const { product, getProductToCart } = this.props;
    return (
      <div>
        <div>
          <h1 data-testid="product-detail-name">{product.title}</h1>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>
            R$:
            {product.price}
          </p>
          <button
            data-testid="product-detail-add-to-cart"
            onClick={ () => getProductToCart(product) }
            type="button"
            width="50px"
          >
            adicionar ao Carrinho
          </button>
          <Link data-testid="shopping-cart-button" to="/cart">
            <button type="button">Ir para o carrinho</button>
          </Link>
          <Form />
        </div>
      </div>
    );
  }
}

productPage.propTypes = {
  product: PropTypes.objectOf.isRequired,
  getProductToCart: PropTypes.func.isRequired,
};
