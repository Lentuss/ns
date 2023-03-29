import { configureStore } from '@reduxjs/toolkit';

import exampleSlice from './slices/example';
import generalSlice from './slices/general';

export const store = configureStore({
  reducer: {
    examples: exampleSlice,
    general: generalSlice
  }
});
