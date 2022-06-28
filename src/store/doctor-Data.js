/** @format */

import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "btnToogle",
  initialState: {  docData: {} },
  reducers: {
    docToogle(state, action) {
        console.log(action.payload);
      state.docData = action.payload;
    },
  },
});

export const docAction = doctorSlice.actions;
export default doctorSlice;
