import React from 'react';
import { Router } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';
import Data from '../data';

describe('Testing Pokedex.js', () => {
  it('Test if pokemon is rendered when the Proximo Pokemon is clicked', () => {
    const history = createMemoryHistory();
    const { queryByText, getByText, queryAllByRole } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const nextPokemon = queryByText('Próximo pokémon');
    expect(nextPokemon.tagName).toBe('BUTTON');
    expect(nextPokemon).toBeInTheDocument();
    fireEvent.click(nextPokemon);

    const newPokemon = getByText('Charmander');
    expect(newPokemon).toBeInTheDocument();

    const lastPokemon = Data[Data.length - 1];
    expect(lastPokemon.name).toBe('Dragonair');
    fireEvent.click(nextPokemon);

    const firstPokemon = Data[0];
    expect(firstPokemon.name).toBe('Pikachu');

    const allPok = queryByText('All');
    expect(allPok).toBeInTheDocument();
    expect(allPok.tagName).toBe('BUTTON');

    const typeButtons = queryAllByRole('button');
    expect(typeButtons[1].ineerHTML).toBe('Eletric');
    expect(typeButtons[2].ineerHTML).toBe('Fire');
    expect(typeButtons[3].ineerHTML).toBe('Bug');
    expect(typeButtons[4].ineerHTML).toBe('Poison');
    expect(typeButtons[5].ineerHTML).toBe('Psychic');
    expect(typeButtons[6].ineerHTML).toBe('Normal');
    expect(typeButtons[7].ineerHTML).toBe('Dragon');
    const pokemonType = typeButtons[1];
    fireEvent.click(pokemonType);
  });
});
