import { createSlice , PayloadAction} from '@reduxjs/toolkit';
export interface Post {
    _id: string;
    title: string;
    description: string;
    views: number;
    price: number;
    imageUrl: string;
    alt: string;
    author: string;
    enable: boolean;
}

const postSlice = createSlice({
    name: 'Posts',
    initialState:[] as Post[],
    reducers: {
        initializePostsReducer: (state, action: PayloadAction<Post[]>)=> {
        const keys = state.map((post)=> post._id);
        const mergedArray = [...state, ...action.payload.filter((post)=> !keys.includes(post._id))];
          return mergedArray;
        },
        addPostReducer: (state, action: PayloadAction<Post>) => {
            // Add post to the state array
            state.unshift(action.payload);
        },
        deletePostReducer: (state, action: PayloadAction<Post["_id"]>) => {
            // Delete post from the state array
         return   state.filter((post) => {
            if(post._id !== action.payload){
                return post
            }
        });
        },
        updatePostReducer: (state, action: PayloadAction<Post>) => {
          return state.forEach((post) => {
            if(post._id === action.payload._id){
                post.enable = action.payload.enable;
            }
           })
        },
    },
});
export const { initializePostsReducer,addPostReducer,deletePostReducer,updatePostReducer} = postSlice.actions;
export default postSlice.reducer;
