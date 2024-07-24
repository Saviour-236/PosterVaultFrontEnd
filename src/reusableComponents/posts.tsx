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
            <div className="space-between p-[1rem] maxlg:flex ">
                {posts.map((post) => (
                    <li key={post._id}  className=" border list-none rounded-lg m-[1rem] ">
                        <PostCard post={post} />
                    </li>
                ))}
            </div>
        </>
    )
}

export default posts