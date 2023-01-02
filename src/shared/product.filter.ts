import { Product } from '../types/product';

export const filterProducts = (products: Product[], query: string): Product[] => {
  const queryLowercase = query.toLowerCase();
  return products.filter((product) => {
    const { title } = product;

    return title.toLowerCase().includes(queryLowercase);
  });
};
