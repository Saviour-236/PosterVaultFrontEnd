// store.ts

import { configureStore } from "@reduxjs/toolkit";
import PostSliceReducer from "./Slices/postSlice";
import UserSliceReducer  from "./Slices/userSlice";
import ViewImageReducer from "./Slices/viewImageSlice";
import cartSliceReducer from "./Slices/cartSlice";
import categoriesSliceReducer from "./Slices/categoriesSlice"
import globelVariablesReducer from "./Slices/globelVariables";
// Configure the store
const store = configureStore({
    reducer: {
        globalVariablesSliceState: globelVariablesReducer,
        postSliceState: PostSliceReducer,
        userSliceState: UserSliceReducer,
        viewImageSliceState: ViewImageReducer,
        cartSliceState: cartSliceReducer,
        categoriesSlice:categoriesSliceReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
