
import { RootState } from '../../../Statemanagement/store';
import AdminPostCard from './adminPostCard'
import { useSelector } from 'react-redux';
import { Post } from '../../../Statemanagement/Slices/postSlice';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../../../utilities/fetchingRequest';
import { useDispatch } from 'react-redux';
import { initializePostsReducer } from '../../../Statemanagement/Slices/postSlice';

function Adminposts() {
    const posts = useSelector((state: RootState) => state.postSliceState);
    const dispatch = useDispatch();
    const [loadingBit, setLoadingBit] = useState(false);

    //fetching posts from the server and saving them in the redux strore
    useEffect(() => {
        setLoadingBit(true);
        fetchPosts().then((posts) => {
            setLoadingBit(false);
            dispatch(initializePostsReducer(posts));
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <>{loadingBit ? <div className='text-center text-3xl'>Loading...</div>
            : <div className=' grid grid-cols-4 p-[1rem] gap-[1rem] '>
                {posts.map((post: Post) => {
                    return <li key={post._id} className='list-none mx-auto ' >
                        <AdminPostCard post={post} />
                    </li>
                }
                )}
            </div>
        }

        </>
    )
}

export default Adminposts

