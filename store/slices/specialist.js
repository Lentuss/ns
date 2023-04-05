import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSpecialistModalShow: false,
  selectedSpecialist: null,
  isSpecialistFormModalShow: false,
  isHomeFormModalShow: false,
  isSuccessModalShow: false
};

const specialistSlice = createSlice({
  name: 'Specialist',
  initialState,
  reducers: {
    toogleShowSpecialistModal: (state, action) => {
      state.isSpecialistModalShow = action.payload;
    },
    toogleShowSpecialistFormModal: (state, action) => {
      state.isSpecialistFormModalShow = action.payload;
    },
    selectSpecialist: (state, action) => {
      state.selectedSpecialist = action.payload;
    },
    toogleShowHomeFormModal: (state, action) => {
      state.isHomeFormModalShow = action.payload;
    },
    toogleShowSuccessModal: (state, action) => {
      state.isSuccessModalShow = action.payload;
    }
  }
});

export const {
  toogleShowSpecialistModal,
  toogleShowSpecialistFormModal,
  selectSpecialist,
  toogleShowHomeFormModal,
  toogleShowSuccessModal
} = specialistSlice.actions;

export default specialistSlice.reducer;
