import { TextField } from '@mui/material';
import React from 'react';
import styles from './FVSearch.module.scss';
import { FVSearchProps } from './FVSearch.type';

const FVSearch = (props: FVSearchProps) => {
  const { handleOnChange } = props;

  return (
    <div className={styles.search} data-testid="FVSearch">
      <TextField
        id="search"
        label="Search products"
        type="search"
        variant="filled"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default FVSearch;
