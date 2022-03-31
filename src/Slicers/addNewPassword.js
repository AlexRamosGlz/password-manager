import { createSlice } from "@reduxjs/toolkit";

const passwordSlice = createSlice({
  name: 'password',
  initialState: {
   value: [],
  },

   reducers:{
     addPassword: (state, action) => {
        state.value = [...state.value, action.payload]
     }
   }
})

export const {addPassword} =passwordSlice.actions;
export default passwordSlice.reducer;