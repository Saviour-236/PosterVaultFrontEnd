import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from '../interfaces';
export interface UserState {
    userInfo: User;
    token: string;
}
const userSlice = createSlice({
    name: 'user',
    initialState:{} as UserState,
    reducers: {
        initializeUser: (_state ,action: PayloadAction<UserState>) => {
            return action.payload;
        },
        clearUserReducer: () => {
            return {} as UserState;
        }
        ,
    },
});

export const { initializeUser , clearUserReducer } = userSlice.actions;

export default userSlice.reducer;