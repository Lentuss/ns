import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenMobileMenu: false,
  seletedLanguage: {},
  isShowCookiesBanner: false,
  isShowCookiesModal: false
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
    },
    toggleCookiesBanner: (state, action) => {
      state.isShowCookiesBanner = action.payload;
    },
    toggleCookiesModal: (state, action) => {
      state.isShowCookiesModal = action.payload;
    }
  }
});

export const {
  toogleMobileMenu,
  setLanguage,
  toggleCookiesBanner,
  toggleCookiesModal
} = generalSlice.actions;

export default generalSlice.reducer;
