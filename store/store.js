import { configureStore } from '@reduxjs/toolkit';

import generalSlice from './slices/general';
import specialistSlice from './slices/specialist';

export const store = configureStore({
  reducer: {
    general: generalSlice,
    specialist: specialistSlice
  }
});
