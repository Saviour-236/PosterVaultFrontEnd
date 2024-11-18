import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../Statemanagement/store";
import PostCard from "./cards/postCard";
import { useEffect,  } from "react";
import { fetchPosts } from "../apiRequests/fetchingRequest"
import { clearPostReducer, initializePostsReducer } from "../Statemanagement/Slices/postSlice"
import Masonry from "react-masonry-css";



function posts() {
    const state = useSelector((state: RootState) => state.postSliceState.allPosts);
    const breakpointColumns = {
        default: 4,
        1100: 3,
        700: 2,
    };
  
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {

        // fetching posters from server
        fetchPosts()
            .then((posts) => {
                // console.log("posters are here", posts)
                dispatch(initializePostsReducer(posts))
            })
            .catch((err) => {
                console.log(err)
            })
        // console.log("posts are loaded")
        return (() => {
            dispatch(clearPostReducer())
        })

    }, [])
    if (state && Object.keys(state).length == 0) {
        return <div className="h-[87vh] w-[100vw] border flex justify-center items-center "><div>Loading</div></div>;
    }
    return (
        <>
            {/* full section conationg all post */}
            <div className="min-w-fit   mt-4 
         "  >
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="flex  "
                    columnClassName="min-w-fit  ">
                    {state &&
                        state.map((post, index) => (
                             <PostCard post={post}  key={index} />
                        ))
                    }
                </Masonry>
            </div>
        </>
    )
}

export default posts