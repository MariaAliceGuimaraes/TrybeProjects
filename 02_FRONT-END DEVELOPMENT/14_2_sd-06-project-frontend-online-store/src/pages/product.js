import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import ProductPage from '../components/productPage';

export default class Product extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { id, category } = match.params;
    this.searchApiProducts = this.searchApiProducts.bind(this);
    this.getProductToCart = this.getProductToCart.bind(this);
    this.state = {
      product: [],
      id,
      category,
      shoppingCart: [],
    };
  }

  componentDidMount() {
    this.searchApiProducts();
  }

  getProductToCart(product) {
    const { shoppingCart } = this.state;
    const oldArray = shoppingCart;
    oldArray.push(product);
    this.setState({
      shoppingCart: oldArray,
    });
    const CartLocal = JSON.stringify(shoppingCart);
    localStorage.setItem('cartLocal', CartLocal);
  }

  async searchApiProducts() {
    const { category, id } = this.state;
    await api
      .getProductsFromCategoryAndQuery(category, '')
      .then((res) => res.results.filter((element) => element.id === id))
      .then((res) => {
        this.setState({
          product: res[0],
        });
      });
  }

  render() {
    const { product } = this.state;
    return (
      <ProductPage product={ product } getProductToCart={ this.getProductToCart } />
    );
  }
}

Product.propTypes = {
  match: PropTypes.objectOf.isRequired,
};
