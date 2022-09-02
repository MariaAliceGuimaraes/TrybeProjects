import React from 'react';
import renderWithRouter from '../renderWithRouter';
import About from '../components/About';

describe('Test ABout', () => {
  it('test if the page contains pokedex info', () => {
    const { getByText } = renderWithRouter(<About />);
    const header = getByText('About Pokédex');
    expect(header).toBeInTheDocument();
  });

  it('test if the page contains h2 heading with about Pokedex text', () => {
    const { container } = renderWithRouter(<About />);
    const h2 = container.querySelector('h2');
    expect(h2).toBeInTheDocument();
    expect(h2.innerHTML).toBe('About Pokédex');
  });

  it('test if the page contains two paragraphs about the pokedex', () => {
    const { container } = renderWithRouter(<About />);
    const p = container.querySelectorAll('p');
    const pLength = 2;
    expect(p.length).toBe(pLength);
  });

  it('test if the page contains the image of a pokedex', () => {
    const { container } = renderWithRouter(<About />);
    const image = container.querySelector('img');
    expect(image.src).toBe('https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
