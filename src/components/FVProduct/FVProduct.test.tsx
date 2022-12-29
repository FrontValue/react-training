import React from 'react';
import { render, screen } from '@testing-library/react';
import FVProduct from '.';

describe('<FVProduct />', () => {
  it('it should mount', () => {
    render(
      <FVProduct
        id={0}
        title={''}
        price={0}
        description={''}
        category={''}
        image={''}
        rating={{
          rate: 0,
          count: 0
        }}
      />
    );

    const product = screen.getByTestId('FVProduct');

    expect(product).toBeInTheDocument();
  });
});
