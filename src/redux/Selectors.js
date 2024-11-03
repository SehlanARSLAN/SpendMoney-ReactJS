import { createSelector } from 'reselect';

const selectProducts = (state) => state.products.products;

export const selectProductsWithQuantity = createSelector(
  [selectProducts],
  (products) => products.filter((product) => product.quantity > 0)
);
