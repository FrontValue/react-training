import React from 'react';
import { render, screen } from '@testing-library/react';
import FVProductsList from './FVProductsList';
import FVProduct from '../FVProduct';
import { Product } from '../../types/product';
import { createProductMock } from '../../shared/product.mock';

describe('<FVProductsList />', () => {
  const productsMock: Product[] = [
    createProductMock({
      id: 1
    }),
    createProductMock({
      id: 2
    }),
    createProductMock({
      id: 3
    })
  ];

  it('should render 3 products', () => {
    render(<FVProductsList productsList={productsMock} />);
    const products = screen.getByTestId('FVProductsList');
    const productItems = products.querySelectorAll('.product');

    expect(productItems.length).toBe(3);

    productItems.forEach((item, index) => {
      const product = render(<FVProduct {...productsMock[index]} />);
      const productComponent = product.container.querySelector('.product');

      expect(item).toStrictEqual(productComponent);
    });
  });
});
