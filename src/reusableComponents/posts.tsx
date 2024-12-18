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
        1000: 3,
        440: 2
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
        return (() => {
            dispatch(clearPostReducer())
        })

    }, [])
    if (state  == undefined) {
        return <div className="h-[87vh] w-[100vw]  flex justify-center items-center "><div>Sorry For Delay "Free server h na"</div></div>;
    }
    return (
        <>
            {/* full section conationg all post */}
            <div className="min-w-fit   mt-5 p-2 
         "  >
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="flex   "
                    columnClassName="space-y-1  ">
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