import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Poster } from '../interfaces';



const postSlice = createSlice({
    name: 'Posts',
    initialState: [] as  Poster [] ,
    reducers: {
        //filling the posts in the state
        initializePostsReducer: (state, action: PayloadAction<Poster[]>) => {
            for (const poster of action.payload) {
                poster.imageUrl = poster.imageUrl.replace("upload/", "upload/w_500,h_500,c_limit/");
                state.push(poster);
            }
            return state;
        },
        //adding a post in the state this function will only be called admin panel when a new will bieng added
        addPostReducer: (state, action: PayloadAction<Poster>) => {
            // if(state[action.payload.category] === undefined){
            //     state[action.payload.category] = [] as Poster[];
            // }
            state.unshift(action.payload);
            return state;
        },
        // this function only will be called from admin panel when a post will be deleted
        deletePostReducer: (state, action) => {
            // console.log(action.payload)
            state = state.filter((post) => post._id !== action.payload);
            // console.log(state.allPosts.length)
            return state;
        },
        // this function will be called from admin panel when a post will be updated
        updatePostReducer: (state, action: PayloadAction<Poster>) => {
            console.log(state, action)
        },
    },
});




export const { initializePostsReducer, addPostReducer, deletePostReducer, updatePostReducer } = postSlice.actions;
export default postSlice.reducer;
