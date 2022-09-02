import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.getProductToCart = this.getProductToCart.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.state = {
      shoppingCart: [],
    };
  }

  setLocalStorage() {
    const { shoppingCart } = this.state;
    const { products } = this.props;
    const CartLocal = JSON.stringify(shoppingCart);
    const productsLocal = JSON.stringify(products);
    localStorage.setItem('cartLocal', CartLocal);
    localStorage.setItem('productsLocal', productsLocal);
  }

  getProductToCart({ target }) {
    const { shoppingCart } = this.state;
    const oldArray = shoppingCart;
    const { products } = this.props;
    const { name } = target;
    const result = products.filter((element) => element.id === name);
    oldArray.push(result[0]);
    this.setState({
      shoppingCart: oldArray,
    });
    this.setLocalStorage();
  }

  render() {
    const { products, categoryId } = this.props;
    return (
      <div>
        {products.map((element) => (
          <div data-testid="product" key={ element.id }>
            <p>{element.title}</p>
            <img src={ element.thumbnail } alt={ element.title } />
            <p>
              $ :
              {element.price}
            </p>
            <Link
              data-testid="product-detail-link"
              to={ `/${categoryId}/${element.id}` }
            >
              <h2>Veja Mais</h2>
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              name={ element.id }
              onClick={ this.getProductToCart }
            >
              adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.objectOf.isRequired,
  categoryId: PropTypes.string.isRequired,
};
