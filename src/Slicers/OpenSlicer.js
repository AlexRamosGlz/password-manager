import { createSlice } from "@reduxjs/toolkit";

const openSlice = createSlice({
  name: 'open',
  initialState: {
    value: false
  },
  reducers: {
    switchState: (state) => {
      console.log('open', !state.value);
      state.value = !state.value
    }
  }
})

export const { switchState } = openSlice.actions;
export default openSlice.reducer