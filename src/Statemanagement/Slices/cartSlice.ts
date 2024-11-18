import { createSlice } from "@reduxjs/toolkit";
import { Poster } from "../interfaces";

const initialState: Poster[] = [];

const CartSlice = createSlice({
    name: 'CartSlice',
    initialState, 
    reducers:{
        addTocart: (state,action)=>{
            state.push(action.payload);
        },
        removeFromCart: (state,action) => {
            return state.filter( post => post._id!== action.payload)
        }
    }
})

export const { addTocart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;                                       