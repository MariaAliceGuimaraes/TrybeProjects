import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Testing NotFound.js', () => {
  it('test if page contains h2 heading with text Page requested not found', () => {
    const history = createMemoryHistory();
    history.push('./anything');
    const { getByText } = render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const headingH2 = getByText('Page requested not found');
    expect(headingH2).toBeInTheDocument();
    expect(headingH2.tagName).toBe('h2');
    const image = container.querySelector('img');
    expect(image.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
