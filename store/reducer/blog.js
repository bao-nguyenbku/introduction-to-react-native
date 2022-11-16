import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = blogSlice.actions

export default blogSlice.reducer