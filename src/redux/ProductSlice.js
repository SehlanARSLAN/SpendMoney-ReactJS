import { createSlice } from "@reduxjs/toolkit";

const initialBalance = 100000000000;

const initialState = {
  balance: initialBalance,
  products: [
    { id: 1, name: "Big Mac", price: 2, quantity: 0 },
    { id: 2, name: "Flip Flops", price: 3, quantity: 0 },
    { id: 3, name: "Coca-Cola Pack", price: 5, quantity: 0 },
    { id: 4, name: "Skyscraper", price: 850000000, quantity: 0 },
    { id: 5, name: "Cruise Ship", price: 930000000, quantity: 0 },
    { id: 6, name: "NBA Team", price: 2120000000, quantity: 0 },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    buyProduct: (state, action) => {
      const buyProduct = state.products.find(
        (product) => product.id === action.payload
      );
      if (buyProduct) {
        buyProduct.quantity++;
        state.balance -= buyProduct.price;
      }
    },
    sellProduct: (state, action) => {
      const sellProduct = state.products.find(
        (product) => product.id === action.payload
      );
      if (sellProduct && sellProduct.quantity > 0) {
        sellProduct.quantity--;
        state.balance += sellProduct.price;
      }
    },
  },
});

export const { buyProduct, sellProduct } = productSlice.actions;
export default productSlice.reducer;
