// this slice contain those variables which are used in multiple components and need to be updated from multiple components but the effect of the update will effect the one component which is global or rendered in every page of the application like header, footer etc.

import { createSlice } from '@reduxjs/toolkit';

export interface GlobalVariables {
    darkMode: boolean;
    toastValue: {
        type: string;
        message: string;
    };
}

const initialState: GlobalVariables = {
    darkMode: true,
    toastValue: {
        type: '',
        message: '',
    },
};


const globalVariablesSlice = createSlice({
    name: 'globalVariables',
    initialState,
    reducers: {
        setDarkmode:(state, action) => {
            state.darkMode = action.payload;
        },
        setToastValue:(state, action) => {
            state.toastValue = action.payload;
        },
    }
});

export const  {setDarkmode, setToastValue} = globalVariablesSlice.actions;

export default globalVariablesSlice.reducer;