import { createSlice, isAllOf } from '@reduxjs/toolkit'
import fetchAllPosts from '../creators/fetchAllPosts'
import fetchDetailesPosts from '../creators/fetchDetailesPosts'
const initialState = {
    posts: [],
    details: {},
    isLoading: true,
    errorPost: '',
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
                state.isLoading = false;

            }).addCase(fetchDetailesPosts.fulfilled, (state, action) => {
                state.details = action.payload
            }).addCase(fetchDetailesPosts.rejected,(state, action) =>{
                state.errorPost = action.payload;
                state.isLoading = false;
            })
     
    }
})

export const { setPosts } = postslice.actions

export default postslice.reducer