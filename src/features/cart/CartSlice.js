import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 10,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "again",
  initialState,
});

// console.log(cartSlice);

export default cartSlice.reducer;
