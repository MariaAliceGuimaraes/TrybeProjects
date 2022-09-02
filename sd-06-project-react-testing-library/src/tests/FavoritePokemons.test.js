import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../components';
import Data from '../data';

describe('Testing FavoritePokemon.js', () => {
  it('shows no favorite pokemon found text qhen there are no favorite pokemons', () => {
    const { container } = renderWithRouter(<FavoritePokemons />);
    const pNoFav = container.querySelector('p');
    expect(pNoFav).toBeInTheDocument();
    expect(pNoFav.innerHTML).toBe('No favorite pokemon found');
  });

  // it('Test to see if all favorited pokemon cards are rendered', () => {
  //   const { container } = renderWithRouter(<FavoritePokemons />);
  //   const favPokemon = container.querySelector('favorite-pokemon');
  //   expect(favPokemon).toBeInTheDocument();
  // });

  it('Test if non-favorited pokemon cards are not rendered', () => {
    const { queryByText } = render(
      <MemoryRouter>
        <FavoritePokemons pokemons={ [Data[0]] } />
      </MemoryRouter>,
    );
    const pokemonNovo = queryByText('Charmander');
    expect(pokemonNovo).not.toBeInTheDocument();
    const pokemonFavorito = queryByText('Pikachu');
    expect(pokemonFavorito).toBeInTheDocument();
  });
});
