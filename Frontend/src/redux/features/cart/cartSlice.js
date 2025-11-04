import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';


const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        item => item._id === action.payload._id
      );

      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Item added to cart",
  showConfirmButton: false,
  timer: 1500
});
      } else {
        Swal.fire({
  title: "Item already in cart",
  icon: "info",
  html: `
    <p>The item "<strong>${action.payload.title}</strong>" is already in your cart.</p>
  `,
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great!
  `,
  confirmButtonAriaLabel: " Thumbs up",
  cancelButtonText: `
    <i class="fa fa-thumbs-down"></i> Okay
  `,
  cancelButtonAriaLabel: "Thumbs down"
});
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
