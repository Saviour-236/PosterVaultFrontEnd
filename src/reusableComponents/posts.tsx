import PostCard from "./cards/postCard";
import Masonry from "react-masonry-css";
import { Poster } from "../Statemanagement/interfaces";
import { RootState } from "../Statemanagement/store";
import { useDispatch, useSelector } from "react-redux";
import { filterAndCreateCategory, initializePostsReducer } from "../Statemanagement/Slices/postSlice";
import { fetchPosts } from "../apiRequests/fetchingRequest";
import { useState, useEffect } from "react";
import React from "react";

const Posts = React.memo(({ category }: { category: string }) => {
    const state: Poster[] =
        useSelector((state: RootState) => state.postSliceState[category as keyof RootState["postSliceState"]]);
        // console.log("state", state);    
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (state == undefined && category.toLowerCase() === "allposts") {
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
        } else if (state === undefined) {
            dispatch(filterAndCreateCategory(category));
        }
    }, [state, category, dispatch]);

    const breakpointColumns = {
        default: 4,
        1000: 3,
        440: 2,
    };

    return (
        <>
            {state && state.length > 0 ? (
                <div className="min-w-fit mt-5 p-2">
                    <Masonry
                        breakpointCols={breakpointColumns}
                        className="flex"
                        columnClassName="space-y-1"
                    >
                        {state.map((poster) => (
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
