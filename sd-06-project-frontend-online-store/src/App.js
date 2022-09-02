import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { homeList, shoppingCart, product } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/cart" component={ shoppingCart } />
          <Route exact path="/:category/:id" component={ product } />
          <Route path="/" component={ homeList } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
