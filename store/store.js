import { configureStore } from '@reduxjs/toolkit';

import generalSlice from './slices/general';
import specialistSlice from './slices/specialist';
import articleSlice from './slices/article';

export const store = configureStore({
  reducer: {
    general: generalSlice,
    specialist: specialistSlice,
    article: articleSlice
  }
});
