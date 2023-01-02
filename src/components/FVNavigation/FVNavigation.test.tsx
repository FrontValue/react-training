import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FVNavigation from './FVNavigation';
import { BrowserRouter } from 'react-router-dom';

describe('<FVNavigation />', () => {
  it('it should mount', () => {
    render(<FVNavigation />, { wrapper: BrowserRouter });

    const fvNavigation = screen.getByTestId('FVNavigation');

    expect(fvNavigation).toBeInTheDocument();
  });
});
