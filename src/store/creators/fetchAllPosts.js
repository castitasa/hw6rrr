import {createAsyncThunk} from '@reduxjs/toolkit'
import { api } from '../../api/api';
const fetchAllPosts = createAsyncThunk(
    'posts/getposts',
    async (userData, { rejectWithValue }) => {
      
      try {
        const response =await api.getPosts();
        return response.data
      } catch (err) {
        return rejectWithValue(err?.response || err.message)
      }
    }
  )
  export default fetchAllPosts