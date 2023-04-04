import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSpecialistModalShow: false,
  selectedSpecialist: null,
  isSpecialistFormModalShow: false
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
    }
  }
});

export const {
  toogleShowSpecialistModal,
  toogleShowSpecialistFormModal,
  selectSpecialist
} = specialistSlice.actions;

export default specialistSlice.reducer;
