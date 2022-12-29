import React from 'react';
import { FVSquareImageProps } from './FVSquareImage.types';
import classes from './FVSquareImage.module.scss';

const FVSquareImage = (props: FVSquareImageProps) => {
  const { src, alt } = props;

  return <img className={classes.square} src={src} alt={alt} data-testid="FVSquareImage" />;
};

export default FVSquareImage;
