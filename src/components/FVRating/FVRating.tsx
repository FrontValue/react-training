import React from 'react';
import classes from './FVRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { createStars, Star } from '../../shared/star.service';
import { FVRatingProps } from './FVRating.types';

const FVRating = (props: FVRatingProps) => {
  const { count, rate } = props;

  const STARS_ELEMENTS: Record<Star, JSX.Element> = {
    '0': <FontAwesomeIcon icon={faStarEmpty} />,
    '0.5': <FontAwesomeIcon icon={faStarHalfStroke} />,
    '1': <FontAwesomeIcon icon={faStar} />
  };

  const stars = createStars(rate);

  return (
    <div className={classes.rating} data-testid="FVRating">
      {stars.map((star, index) => (
        <span key={index} className={classes.star}>
          {STARS_ELEMENTS[star]}
        </span>
      ))}
      <span className={classes.count}>{count}</span>
    </div>
  );
};

export default FVRating;
