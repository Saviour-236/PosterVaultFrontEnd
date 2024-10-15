import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../interfaces";

const viewImageSlice = createSlice({
    name: 'viewImage',
    initialState:  null || {} as Post,
    reducers: {
        initializeViewImage:(state, action) => {
              state = action.payload;
              return state
           },
    }
});

export const {initializeViewImage } = viewImageSlice.actions;
export default viewImageSlice.reducer;