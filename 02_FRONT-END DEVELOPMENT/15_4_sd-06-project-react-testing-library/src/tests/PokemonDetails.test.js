import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testing PoemonDetails.js', () => {
  it('testing if info about the selected pokemon are rendered', () => {
    const history = createMemoryHistory();
    history.push(`/pokemons/${favoritoPokemon.id}`);
    const { queryByText, queryAllByRole } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const pokemonName = queryByText('Pikachu');
    expect(pokemonName).toBeInTheDocument();

    const linkPokemonDetails = queryAllByRole('link');
    expect(linkPokemonDetails).not.toBeInTheDocument();

    const h2 = querySelector('h2');
    expect(h2).toBeInTheDocument();
    expect(h2.innerHTML).toBe('Summary');

    const summaryP = querySelector('p');
    const pLength = 1;
    expect(summaryP).toBeInTheDocument();
    expect(p.length).toBe(pLength);
  });

  it('testing if is rendered a sections of maps containing pokemon locations', () => {
    const history = createMemoryHistory();
    history.push(`/pokemons/${favoritoPokemon.id}`);
    const { queryByText, queryAllByRole } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const h2 = querySelector('h2');
    expect(h2).toBeInTheDocument();
    expect(h2.innerHTML).toBe('Encountered pokémons');

    const locationTag = queryAllByRole('em');
    const locationsLength = 2;
    expect(locationTag).toBe(locationsLength);
    expect(locationTag[0].innerHTML).toBe('Kanto Viridian Forest');
    expect(locationTag[1].innerHTML).toBe('Kanto Power Plant');

    const image = querySelector('img');
    expect(image.src).toBe('https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    const alt = queryByText('locarion').parentElement.previousElementSibling;
    expect(alt).toBe(`${favoritoPokemon.name} location`);
  });
  it('Testing if user can favor pokemon through the details page', () => {
    const history = createMemoryHistory();
    history.push(`/pokemons/${favoritoPokemon.id}`);
    const { queryAllByRole } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const favCheckbox = queryAllByRole('checkbox');
    expect(favCheckbox).toBeInTheDocument();
    fireEvent.click(favCheckbox);

    const star = queryAllByRole('img')
      .find((imgSrc) => imgSrc.src.endsWith('star-icon.svg'));
    expect(star).toBeInTheDocument();
    fireEvent.click(favCheckbox);
    expect(star).not.toBeInTheDocument();
  });
});
