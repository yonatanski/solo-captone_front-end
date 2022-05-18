import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    qty: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.qty += 1
      state.products.push(action.payload)
      state.total += action.payload.price * action.payload.qty
    },
    removeProduct: (state, action) => {
      state.qty -= 1
      let productIndex = state.products.findIndex((p) => p._id === action.payload._id)
      state.products.splice(productIndex, 1)
      state.products = [...state.products]
      state.total -= action.payload.price * action.payload.qty
    },
  },
})
export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer
