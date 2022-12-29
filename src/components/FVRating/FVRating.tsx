import React from 'react';
import classes from './FVRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

const FVRating = () => {
  return (
    <div className={classes.rating} data-testid="FVRating">
      <span className={classes.star}>
        <FontAwesomeIcon icon={faStar} />
      </span>
      <span className={classes.star}>
        <FontAwesomeIcon icon={faStar} />
      </span>
      <span className={classes.star}>
        <FontAwesomeIcon icon={faStar} />
      </span>
      <span className={classes.star}>
        <FontAwesomeIcon icon={faStarHalfStroke} />
      </span>
      <span className={classes.star}>
        <FontAwesomeIcon icon={faStarEmpty} />
      </span>
      <span className={classes.count}>(120)</span>
    </div>
  );
};

export default FVRating;
