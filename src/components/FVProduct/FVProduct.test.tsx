import React from 'react';
import { render, screen } from '@testing-library/react';
import FVProduct from '.';
import { createProductMock } from '../../shared/product.mock';
import FVRating from '../FVRating';

describe('<FVProduct />', () => {
  const productMock = createProductMock({
    rating: {
      count: 34,
      rate: 4.8
    }
  });

  it('should render product title, category, description and price', () => {
    render(<FVProduct {...productMock} />);

    expect(screen.getByText(productMock.title)).toBeInTheDocument();
    expect(screen.getByText(productMock.category)).toBeInTheDocument();
    expect(screen.getByText(productMock.description)).toBeInTheDocument();
    expect(screen.getByText(productMock.price)).toBeInTheDocument();
  });

  it('should render a rating', () => {
    render(<FVProduct {...productMock} />);

    const ratingRender = render(<FVRating {...productMock.rating} />);
    const rating = ratingRender.container.querySelector('.rating');

    expect(rating).toBeInTheDocument();
  });

  it('should render a square image with src and alt', () => {
    const { container } = render(<FVProduct {...productMock} />);
    const image = container.querySelector('img');

    expect(image).toBeInTheDocument();
    expect(image?.src).toContain(productMock.image);
    expect(image?.alt).toContain(productMock.title);
  });
});
