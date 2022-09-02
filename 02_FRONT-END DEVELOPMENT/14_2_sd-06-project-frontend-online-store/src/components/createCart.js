import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreateCart extends Component {
  constructor(props) {
    super(props);
    this.removeLocalStorage = this.removeLocalStorage.bind(this);
    this.sumProduct = this.sumProduct.bind(this);
    this.decreaseProduct = this.decreaseProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.state = {
      totalCartValue: '',
    };
  }

  componentDidMount() {
    const cartLocalStorage = JSON.parse(localStorage.getItem('cartLocal'));
    const zer = 0;
    if (cartLocalStorage !== null) {
      const result = cartLocalStorage
        .reduce((previousValue, next) => previousValue + next.price, zer);
      this.setStatetotalCartValue(result);
    }
  }

  setStatetotalCartValue(element) {
    this.setState({
      totalCartValue: element,
    });
  }

  removeProduct(target, elementId, price) {
    const { totalCartValue } = this.state;
    const product = target.parentNode;
    const cartLocalStorage = JSON.parse(localStorage.getItem('cartLocal'));
    const removeLocalStorage = cartLocalStorage
      .filter((element) => element.id !== elementId);
    const CartLocal = JSON.stringify(removeLocalStorage);
    localStorage.setItem('cartLocal', CartLocal);
    product.remove();
    const result = Math.round(totalCartValue - price);
    this.setStatetotalCartValue(result);
  }

  sumProduct(target, element, price) {
    const { totalCartValue } = this.state;
    const number = parseInt(target.parentNode.lastChild.innerText, 0);
    const quantity = number + 1;
    document.getElementById(element).innerText = quantity;
    document.getElementById(`${element}price`).innerText = price * quantity;
    const result = Math.round(price + totalCartValue);
    this.setStatetotalCartValue(result);
  }

  decreaseProduct(target, element, price) {
    const number = parseInt(target.parentNode.lastChild.innerText, 0);
    const { totalCartValue } = this.state;
    const quantity = number - 1;
    const zero = 0;
    const result = (Math.round(totalCartValue - price));
    if (quantity === zero) {
      this.setStatetotalCartValue(result);
      this.removeProduct(target, element, price);
    } else {
      document.getElementById(element).innerText = quantity;
      document.getElementById(`${element}price`).innerText = price * quantity;
      console.log(price);
      this.setStatetotalCartValue(result);
    }
  }

  removeLocalStorage() {
    localStorage.removeItem('cartLocal');
  }

  render() {
    const { cart } = this.props;
    const { totalCartValue } = this.state;

    return cart !== null ? (
      <div data-testid="shopping-cart-empty-message">
        {cart.map((element) => (
          <div key={ element.id }>
            <img src={ element.thumbnail } alt={ element.title } />
            <h4 data-testid="shopping-cart-product-name">{element.title}</h4>
            <button
              type="button"
              onClick={ (e) => this.removeProduct(e.target, element.id, element.price) }
            >
              [X]
            </button>
            <p id={ `${element.id}price` }>{element.price}</p>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ (e) => this.sumProduct(e.target, element.id, element.price) }
            >
              +
            </button>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ (e) => this.decreaseProduct(e.target, element.id, element.price) }
            >
              -
            </button>
            <p id={ element.id } data-testid="shopping-cart-product-quantity">
              1
              <p className="bug">23</p>
            </p>
          </div>
        ))}
        <div>{totalCartValue}</div>
        <button type="button" onClick={ this.removeLocalStorage }>
          Deletar Todos
        </button>
      </div>
    ) : (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      </div>
    );
  }
}

CreateCart.propTypes = {
  cart: PropTypes.objectOf.isRequired,
};
