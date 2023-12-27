import { createAsyncThunk } from '@reduxjs/toolkit'
const fetchDetailesPosts = createAsyncThunk(
    'posts/getdetailes',
    async (id, { rejectWithValue }) => {

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = response.json()
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
export default fetchDetailesPosts
