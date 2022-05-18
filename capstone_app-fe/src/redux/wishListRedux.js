import { createSlice } from "@reduxjs/toolkit"

const wishSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishProducts: [],
    qty: 0,
  },
  reducers: {
    addProductwishList: (state, action) => {
      state.qty += 1
      state.wishProducts.push(action.payload)
    },
    removeProductwishList: (state, action) => {
      state.qty -= 1
      let productIndex = state.wishProducts.findIndex((p) => p._id === action.payload._id)
      state.wishProducts.splice(productIndex, 1)
      state.wishProducts = [...state.wishProducts]
    },
  },
})
export const { addProductwishList, removeProductwishList } = wishSlice.actions
export default wishSlice.reducer
