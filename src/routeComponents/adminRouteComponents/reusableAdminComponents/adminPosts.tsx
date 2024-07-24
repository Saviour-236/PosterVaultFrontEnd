
import { RootState } from '../../../Statemanagement/store';
import AdminPostCard from './adminPostCard'
import { useSelector } from 'react-redux';
import { Post } from '../../../Statemanagement/Slices/postSlice';
import { useEffect } from 'react';
import { fetchPosts } from '../../../utilities/fetchingRequest';
import { useDispatch } from 'react-redux';
import { initializePostsReducer } from '../../../Statemanagement/Slices/postSlice';

function Adminposts() {
    const posts = useSelector((state: RootState) => state.postSliceState);
    const dispatch = useDispatch();

    //fetching posts from the server and saving them in the redux strore
    useEffect(() => {
        fetchPosts().then((posts) => {
            dispatch(initializePostsReducer(posts));
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <div className=' grid grid-cols-4 p-[1rem] gap-[1rem] '>
                {posts.map((post: Post) => {
                    return <li key={post._id} className='list-none mx-auto ' >
                        <AdminPostCard post={post} />
                    </li>
                }
                )}
            </div>
        </>
    )
}

export default Adminposts

