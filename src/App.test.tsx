import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('it should mount', () => {
    render(<App />);

    const app = screen.getByTestId('FVApp');

    expect(app).toBeInTheDocument();
  });
});
