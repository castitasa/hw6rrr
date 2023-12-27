import { createSlice } from '@reduxjs/toolkit'
import fetchAllPosts from '../creators/fetchAllPosts'
import fetchDetailesPosts from '../creators/fetchDetailesPosts'
const initialState = {
    posts: [],
    details: {}
}

export const postslice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload

            }).addCase(fetchDetailesPosts.fulfilled, (state, action) => {
                state.details = action.payload
            })
    }
})

export const { setPosts } = postslice.actions

export default postslice.reducer