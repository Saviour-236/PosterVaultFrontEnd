import PostCard from "./cards/postCard";
import Masonry from "react-masonry-css";
import { RootState } from "../Statemanagement/store";
import { useDispatch, useSelector } from "react-redux";
import { filterAndCreateCategory, initializePostsReducer } from "../Statemanagement/Slices/postSlice";
import { fetchPosts } from "../apiRequests/fetchingRequest";
import { useState, useEffect } from "react";
import React from "react";

const Posts = React.memo(({ category }: { category: string }) => {
    const state = useSelector((state: RootState) => state.postSliceState);
 // console.log("state", state);    
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>();
    useEffect(() => {
       
        if (Object.keys(state).length === 0 && loading !== true) {
            setLoading(true);
            fetchPosts()
                .then((posts) => {
                    // console.log("posters are here", posts);
                    dispatch(initializePostsReducer(posts));
                })
                .catch((err) => {
                    console.error("Error fetching posts:", err);
                })
                .finally(() => {
                    setLoading(false);
                });
        } 
        if ( category.toLowerCase() !== "allposts" && state[category]?.length === undefined) {
            dispatch(filterAndCreateCategory(category));
        }
    }, [loading,state,category,dispatch]);

    const breakpointColumns = {
        default: 4,
        1000: 3,
        440: 2,
    };

    return (
        <>
            {category in state ? (
                
                <div className="min-w-fit  p-2">
                    total results {state[category].length}
                    <Masonry
                        breakpointCols={breakpointColumns}
                        className="flex"
                        columnClassName="space-y-1"
                    >
                        {state[category].map((poster) => (
                            <PostCard post={poster} key={poster._id} />
                        ))}
                    </Masonry>
                </div>
            ) : (
                loading && <p>Loading...</p>
            )}
        </>
    );
});

export default Posts;
