import { createSlice } from "@reduxjs/toolkit";


const categoriesSlice = createSlice({
    name:"category Section",
    initialState: {
        display:false,
        categoryNames:["Natural","Animated","Natural","Animated","Natural","Animated","Natural","Animated","Natural","Animated","Natural",]
    },
    reducers:{
        toggleDisplayBitReducer: (state) =>{
            state.display = !state.display;
            console.log("state ",state.display)
            return state
        }
    }
})

export const { toggleDisplayBitReducer } = categoriesSlice.actions;

 export default categoriesSlice.reducer
