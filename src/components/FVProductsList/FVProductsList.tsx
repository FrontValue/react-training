import React from 'react';
import { FVProductsListProps } from './FVProductsList.types';
import classes from './FVProductsList.module.scss';
import FVProduct from '../FVProduct';
import { Product } from '../../types/product';

const FVProductsList = (props: FVProductsListProps) => {
  const { productsList } = props;

  return (
    <ul className={classes.productsList} data-testid="FVProductsList">
      {productsList.map((product: Product) => (
        <li key={product.id} id={product.id.toString()}>
          <FVProduct {...product} />
        </li>
      ))}
    </ul>
  );
};

export default FVProductsList;
