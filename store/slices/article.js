import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articleData: null
};

const articleSlice = createSlice({
  name: 'Article',
  initialState,
  reducers: {
    setArticleData: (state, action) => {
      state.articleData = action.payload;
    }
  }
});

export const { setArticleData } = articleSlice.actions;

export default articleSlice.reducer;
