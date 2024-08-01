import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../Statemanagement/store";
import PostCard from "../reusableComponents/postCard";
import { useEffect, } from "react";
import { fetchPosts } from "../utilities/fetchingRequest"
import { initializePostsReducer } from "../Statemanagement/Slices/postSlice"

function posts() {
    const posts = useSelector((state: RootState) => state.postSliceState);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        fetchPosts()
            .then((posts) => {
                dispatch(initializePostsReducer(posts))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div className="space-between p-[1rem] grid grid-cols-3 max-md:grid-cols-1 ">
                {posts.map((post) => (
                    <li key={post._id}  className=" w-fit border list-none rounded-lg m-[1rem] dark:border-none ">
                        <PostCard post={post} />
                    </li>
                ))}
            </div>
        </>
    )
}

export default posts