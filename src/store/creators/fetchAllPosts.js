import {createAsyncThunk} from '@reduxjs/toolkit'
const fetchAllPosts = createAsyncThunk(
    'posts/getposts',
    async (userData, { rejectWithValue }) => {
      
      try {
        const response =await fetch(`https://jsonplaceholder.typicode.com/posts/`)
        const data = response.json()
        return data
      } catch (err) {
        return rejectWithValue(err)
      }
    }
  )
  export default fetchAllPosts