import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface User{
    _id: string;
    name: string;
    email: string;
    profilePic: string;
    admin: boolean;
}

const userSlice = createSlice({
    name: 'user',
    initialState:{} as User,
    reducers: {
        initializeUser: (state, action: PayloadAction<User>) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.profilePic = action.payload.profilePic;
            state.admin = action.payload.admin;
        },
    },
});

export const { initializeUser } = userSlice.actions;

export default userSlice.reducer;