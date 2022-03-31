import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: 'modalOpen',
  initialState: {
    value: false,
  },
  reducers: {
    setOpen: (state => {
      state.value = true;
    }),

    setClose: (state => {
      state.value = false;
    })
  }
})

export const { setOpen, setClose } = modalSlice.actions;
export default modalSlice.reducer;