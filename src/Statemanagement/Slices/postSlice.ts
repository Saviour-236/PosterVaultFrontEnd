import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Poster } from '../interfaces';

export interface PosterCategories {
    allPosts: Poster[];
    classicArt: Poster[];
    popCultureIcons: Poster[];
    motivationalQuotes: Poster[];
    natureLandscapes: Poster[];
    abstractModernArt: Poster[];
    vintageRetro: Poster[];
    moviesTvShows: Poster[];
    musicLegends: Poster[];
    travelDestinations: Poster[];
    historicalMoments: Poster[];
    sportsHeroes: Poster[];
    animeManga: Poster[];
    gamingUniverse: Poster[];
    minimalistDesigns: Poster[];
    streetArtGraffiti: Poster[];
    fantasySciFi: Poster[];
    comicBookCharacters: Poster[];
    typographyCalligraphy: Poster[];
    spaceAstronomy: Poster[];
    [key: string]: Poster[];
}

const postSlice = createSlice({
    name: 'Posts',
    initialState: {} as PosterCategories,
    reducers: {
        //filling the posts in the state
        initializePostsReducer: (state, action: PayloadAction<Poster[]>) => {
            if (state.allPosts == undefined) state.allPosts = [] as Poster[];
            for (const poster of action.payload) {
                poster.imageUrl = poster.imageUrl.replace("upload/", "upload/w_500,h_500,c_limit/");
                state.allPosts.push(poster);
            }
            return state;
        },
        filterAndCreateCategory: (state, action: PayloadAction<string>) => {
            if (!state.allPosts || !Array.isArray(state.allPosts)) {
                // console.error("allPosts is not defined or is not an array");
                return;
            }
            const filtered = state.allPosts.filter(
                (post) => post.category && post.category.toLowerCase() === action.payload.toLowerCase()
            );
            state[action.payload] = filtered;
        },
        //adding a post in the state this function will only be called admin panel when a new will bieng added
        addPostReducer: (state, action: PayloadAction<Poster>) => {
            // if(state[action.payload.category] === undefined){
            //     state[action.payload.category] = [] as Poster[];
            // }
            state.allPosts.unshift(action.payload);
            return state;
        },
        // this function only will be called from admin panel when a post will be deleted
        deletePostReducer: (state, action) => {
            // console.log(action.payload)
            state.allPosts = state.allPosts.filter((post) => post._id !== action.payload);
            // console.log(state.allPosts.length)
            return state;
        },
        // this function will be called from admin panel when a post will be updated
        updatePostReducer: (state, action: PayloadAction<Poster>) => {
            console.log(state, action)
        },
    },
});




export const { initializePostsReducer,filterAndCreateCategory, addPostReducer, deletePostReducer, updatePostReducer } = postSlice.actions;
export default postSlice.reducer;
