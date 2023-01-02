import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import classes from './App.module.scss';
import FVNavigation from './components/FVNavigation/FVNavigation';
import HomePage from './pages/HomePage';
import ProductsOverview from './pages/ProductsOverview';

const App = () => {
  return (
    <div className={classes.app} data-testid="FVApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FVNavigation />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="products-overview" element={<ProductsOverview />} />
            <Route path="*" element={<p>404!</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
