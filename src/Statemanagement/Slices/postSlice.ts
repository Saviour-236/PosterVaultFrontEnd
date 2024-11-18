import {  createSlice , PayloadAction} from '@reduxjs/toolkit';
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
  }
//   const initialState: PosterCategories = {
//     classicArt: [],
//     popCultureIcons: [],
//     motivationalQuotes: [],
//     natureLandscapes: [],
//     abstractModernArt: [],
//     vintageRetro: [],
//     moviesTvShows: [],
//     musicLegends: [],
//     travelDestinations: [],
//     historicalMoments: [],
//     sportsHeroes: [],
//     animeManga: [],
//     gamingUniverse: [],
//     minimalistDesigns: [],
//     streetArtGraffiti: [],
//     fantasySciFi: [],
//     comicBookCharacters: [],
//     typographyCalligraphy: [],
//     spaceAstronomy: []
//   };
  
const postSlice = createSlice({
    name: 'Posts',
    initialState: {} as PosterCategories,
    reducers: {
        initializePostsReducer: (state, action: PayloadAction<Poster[]> )=> {
            if(state.allPosts == undefined) state.allPosts = [] as Poster[];
             for( const poster of action.payload ){
                state.allPosts.push(poster);    
             }
            return state;
        },
        clearPostReducer: (state) => {
            state = {} as PosterCategories; 
            return state;
        },
        addPostReducer: (state, action:PayloadAction<Poster>) => {
            // if(state[action.payload.category] === undefined){
            //     state[action.payload.category] = [] as Poster[];
            // }
            state.allPosts.unshift(action.payload);
            return state;
        },
        deletePostReducer: (state, action) => {
            // console.log(action.payload)
        state.allPosts = state.allPosts.filter((post) => post._id !== action.payload); 
        // console.log(state.allPosts.length)
        return state; 
        },

        updatePostReducer: (state, action: PayloadAction<Poster>) => {
        console.log(state,action)
        },
    },
});




export const { initializePostsReducer,clearPostReducer,addPostReducer,deletePostReducer,updatePostReducer } = postSlice.actions;
export default postSlice.reducer;
