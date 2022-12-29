import React from 'react';
import { render, screen } from '@testing-library/react';

import FVProductsList from './FVProductsList';

describe('<FVProductsList />', () => {
  it('it should mount', () => {
    render(<FVProductsList productsList={[]} />);

    const products = screen.getByTestId('FVProductsList');

    expect(products).toBeInTheDocument();
  });
});
