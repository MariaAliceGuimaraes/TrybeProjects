import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { MovieDetails, NewMovie, EditMovie, MovieList, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={MovieList} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
    </Router>
  );
}

export default App;
