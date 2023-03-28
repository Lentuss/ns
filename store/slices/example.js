import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  examples: [{ id: '1', title: 'Example', content: '' }]
};

const exampleSlice = createSlice({
  name: 'Example of slices',
  initialState,
  reducers: {
    addExamples: (state, action) => {
      const example = action.payload;
      state.examples.push(example);
    },
    removeExamples: (state, action) => {
      const id = action.payload;
      const notes = state.examples.filter((note) => note.id !== id);
      state.examples = notes;
    }
  }
});

// actions
export const { addExamples, removeExamples } = exampleSlice.actions;

export default exampleSlice.reducer;
