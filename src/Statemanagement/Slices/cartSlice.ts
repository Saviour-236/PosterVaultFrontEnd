import { createSlice } from "@reduxjs/toolkit";
import { cartPoster } from "../interfaces";


const initialState = [] as cartPoster[];

const CartSlice = createSlice({
    name: 'CartSlice',
    initialState, 
    reducers:{
        addTocart: (state,action)=>{
            let cartItem = {poster:action.payload,quantity:1}
            if(state.length===0){
                //array is empty adding the first item
                state.push(cartItem);
                return state;
            }
            //if cart is not empty then adding the new item
            for (let item of state){
                //checking if the item is already in the cart
                if(item.poster._id===action.payload._id){
                   // item already in the cart
                   item.quantity+=1;
                    return state;
               }
        }
        state.push(cartItem);
        return state;
    },
        removeFromCart: (state,action) => {
            return state.filter( item => item.poster._id!== action.payload)
        }
    }
})

export const { addTocart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;                                       