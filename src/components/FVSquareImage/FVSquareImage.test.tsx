import React from 'react';
import { render, screen } from '@testing-library/react';
import FVSquareImage from '.';

describe('<FVSquareImage />', () => {
  it('it should mount', () => {
    render(<FVSquareImage src={''} alt={''} />);

    const image = screen.getByTestId('FVSquareImage');

    expect(image).toBeInTheDocument();
  });
});
