import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenMobileMenu: false,
  seletedLanguage: {}
};

const generalSlice = createSlice({
  name: 'General',
  initialState,
  reducers: {
    toogleMobileMenu: (state, action) => {
      state.isOpenMobileMenu = action.payload;
    },
    setLanguage: (state, action) => {
      state.seletedLanguage = action.payload;
    }
  }
});

export const { toogleMobileMenu, setLanguage } = generalSlice.actions;

export default generalSlice.reducer;
