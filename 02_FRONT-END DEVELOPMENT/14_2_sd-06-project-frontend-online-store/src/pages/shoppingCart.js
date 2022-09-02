import React, { Component } from 'react';
import CreateCart from '../components/createCart';

export default class shoppingCart extends Component {
  constructor() {
    super();
    this.localStorageMount = this.localStorageMount.bind(this);
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.localStorageMount();
  }

  async localStorageMount() {
    const cartLocalStorage = await JSON.parse(
      localStorage.getItem('cartLocal'),
    );
    this.setState({
      cart: cartLocalStorage,
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <h1>Seu Carrinho:</h1>
        <CreateCart localStorageMount={ this.localStorageMount } cart={ cart } />
      </div>
    );
  }
}
