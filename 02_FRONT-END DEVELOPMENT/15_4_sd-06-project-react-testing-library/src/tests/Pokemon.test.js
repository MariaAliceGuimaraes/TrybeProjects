import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';
import Data from '../data';

describe('testing Pokemon.js', () => {
  it('testing card - name, weight and img', () => {
    const newPokemon = Data[0];
    const history = createMemoryHistory();
    const { getByText, queryAllByRole, getByTestId } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const pokemonName = getByText('Pikachu');
    expect(pokemonName).toBeInTheDocument();

    const pokemonType = getByTestId('pokemonType');
    expect(pokemonType.innerHTML).toBe('Electric');
    expect(pokemonType).toBeInTheDocument();

    const pokemonWeight = getByTestId('pokemon-weight');
    const pokemonMeasures = newPokemon.averageWeight;
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonWeight.innerHTML)
      .toBe(`Average weight:${pokemonMeasures.value}${pokemonMeasures.measurementUnit}`);

    const imageSource = queryAllByRole('img').find((imgSrc) => imgSrc.scroll.includes('https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png'));
    expect(imageSource).toBeInTheDocument();
    expect(imageSource).toBe(`${novoPokemon.name} sprite`);
  });

  it('testing details, id, star on favorited pokemons', () => {
    const newPokemon = Data[0];
    const history = createMemoryHistory();

    const { getByText, queryAllByRole, getByLabelText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const moreDetails = getByText('More details');
    expect(moreDetails).toBeInTheDocument();

    const linkMoreDetails = moreDetails.href.endsWith(`/pokemons/${newPokemon.id}`);
    expect(linkMoreDetails).toBe(true);
    fireEvent.click(moreDetails);
    expect(history.location.pathname).toBe(`/pokemons/${newPokemon.id}`);

    const favoritedPokemonButton = getByLabelText('Pokémon favoritado?');
    fireEvent.click(favoritedPokemonButton);

    const favoritedPokemon = queryAllByRole('img').find((imagemSRC) => imagemSRC.src
      .endsWith('star-icon.svg'));
    expect(favoritedPokemon.alt).toBe(`${newPokemon.name} is marked as favorite`);
  });
});
