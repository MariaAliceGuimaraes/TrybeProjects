import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testing App.js', () => {
  it('shows the Pokédex when the route is `/`', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const heading = getByText(/Pokédex/i);
    const { location } = createMemoryHistory();
    const { pathname } = location;
    expect(pathname).toBe('/');
    expect(heading).toBeInTheDocument();
  });

  it('App has 3 navigation links', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const homeNav = getByText('Home');
    const aboutNav = getByText('About');
    const favNav = getByText('Favorite Pokémons');

    const homeLinkRef = homeNav.href.replace('http://localhost', '');
    const aboutLinkRef = aboutNav.href.replace('http://localhost', '');
    const favoriteLinkRef = favNav.href.replace('http://localhost', '');

    expect(homeLinkRef).toBe('/');
    expect(aboutLinkRef).toBe('/about');
    expect(favoriteLinkRef).toBe('/favorites');
  });

  it('home link redirects to / path', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const homeLink = getByText('Home');
    fireEvent.click(homeLink);
    const { pathname: homePath } = history.location;
    expect(homePath).toBe('/');
  });

  it('about link redirects to /about path', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const aboutLink = getByText('About');
    fireEvent.click(aboutLink);
    const { pathname: aboutPath } = history.location;
    expect(aboutPath).toBe('/about');
  });

  it('favorite link redirects to /favorites path', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const favoriteLink = getByText('Favorite Pokémons');
    fireEvent.click(favoriteLink);
    const { pathname: favoritesPath } = history.location;
    expect(favoritesPath).toBe('/favorites');
  });

  it('when unknown URL is given redirects to Not Found page', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    history.push('/xjhgj');
    const notFoundPag = getByText(/page\srequested\snot\sfound/i);
    expect(notFoundPag).toBeInTheDocument();
  });
});
