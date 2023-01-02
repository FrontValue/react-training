import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './FVNavigation.module.scss';

const FVNavigation = () => {
  const style = ({ isActive = false }) => ({
    fontWeight: isActive ? 'bold' : 'normal'
  });

  return (
    <div className={styles.navigation} data-testid="FVNavigation">
      <nav>
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/products-overview" style={style}>
          Products overview
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default FVNavigation;
