
import { RootState } from '../../Statemanagement/store';
import AdminPostCard from './adminPostCard'
import { useSelector } from 'react-redux';
import { Post } from '../../Statemanagement/interfaces';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../../apiRequests/fetchingRequest';
import { useDispatch } from 'react-redux';
import { initializePostsReducer } from '../../Statemanagement/Slices/postSlice';

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
            : <div className='space-between justify-center flex flex-wrap p-[1rem] grid-cols-4 max-md:grid-cols-1w'>
                {posts.map((post: Post) => {
                    return <li key={post._id} className='list-none m-5' >
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

