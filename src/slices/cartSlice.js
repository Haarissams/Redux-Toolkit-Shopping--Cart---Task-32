import { createSlice } from '@reduxjs/toolkit';

// Initial state for cart
const initialState = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      price: 549,
      quantity: 1,
      thumbnail: require('../assets/product1.jfif'),
    },
    {
      id: 2,
      title: "iPhone X",
      price: 899,
      quantity: 1,
      thumbnail: require('../assets/product2.jfif'),
    },
    {
        id: 3,
        title: "iPhone 9",
        price: 549,
        quantity: 1,
        thumbnail: require('../assets/product3.jfif'),
      },
      {
        id: 4,
        title: "iPhone X",
        price: 899,
        quantity: 1,
        thumbnail: require('../assets/product1.jfif'),
      },
  ],
  totalQuantity: 2,
  totalAmount: 549 + 899,
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const item = state.products.find(product => product.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find(product => product.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
