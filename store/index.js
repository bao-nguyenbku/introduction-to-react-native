import { configureStore } from '@reduxjs/toolkit'
import blog from './reducer/blog';
export const store = configureStore({
  reducer: {
    blog
  },
})
