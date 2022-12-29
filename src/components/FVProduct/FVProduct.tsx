import React from 'react';
import { FVProductProps } from './FVProduct.types';
import classes from './FVProduct.module.scss';
import FVSquareImage from '../FVSquareImage';
import FVRating from '../FVRating';

const FVProduct = (props: FVProductProps) => {
  const { title, price, description, category, image } = props;

  return (
    <section className={classes.product} data-testid="FVProduct">
      <FVSquareImage src={image} alt={title} />

      <div className={classes.info}>
        <p className={classes.category}>{category}</p>
        <p className={classes.title}>{title}</p>

        <FVRating />

        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{price}</p>
      </div>
    </section>
  );
};

export default FVProduct;
