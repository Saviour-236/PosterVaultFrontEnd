import { createSlice } from "@reduxjs/toolkit";
import { Poster } from "../interfaces";

const  object = {};
const isObjectEmpty  =(object:Object) => {
    return Object.keys(object).length === 0;
}
const viewImageSlice = createSlice({
    name: 'viewImage',
    initialState:  isObjectEmpty(object) ? null : {} as Poster,
    reducers: {
        initializeViewImage:(state, action) => {
              state = action.payload;
              return state
           },
        clearViewImage: (state) => {
         state=null;
         return state;
        },
    }
});

export const {initializeViewImage,clearViewImage } = viewImageSlice.actions;
export default viewImageSlice.reducer;