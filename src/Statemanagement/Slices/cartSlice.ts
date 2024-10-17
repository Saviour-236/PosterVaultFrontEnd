import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../interfaces";

const initialState: Post[] = [];

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