import { configureStore } from '@reduxjs/toolkit'
import PostSlice from './reducers/PostSlice'
export const store = configureStore({
  reducer: {PostSlice},
})