import { configureStore } from '@reduxjs/toolkit';

import exampleSlice from './slices/example';

export const store = configureStore({
  reducer: {
    examples: exampleSlice
  }
});
