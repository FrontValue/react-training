import React from 'react';
import { render, screen } from '@testing-library/react';
import FVRating from '.';

describe('<FVRating />', () => {
  it('it should mount', () => {
    render(<FVRating />);

    const rating = screen.getByTestId('FVRating');

    expect(rating).toBeInTheDocument();
  });
});
