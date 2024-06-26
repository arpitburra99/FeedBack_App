import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    posts: [],
    error: '',
  },
  reducers: {
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = '';
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = [];
        state.error = action.error.message;
      });
  },
});

export const { removePost } = postsSlice.actions;

export default postsSlice.reducer;

// get all posts api..
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});