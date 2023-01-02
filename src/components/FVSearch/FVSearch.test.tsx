import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FVSearch from './FVSearch';

describe('<FVSearch />', () => {
  it('it should mount', () => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      // shandle change here
    };

    render(<FVSearch handleOnChange={handleOnChange} />);

    const fvSearch = screen.getByTestId('FVSearch');

    expect(fvSearch).toBeInTheDocument();
  });
});
