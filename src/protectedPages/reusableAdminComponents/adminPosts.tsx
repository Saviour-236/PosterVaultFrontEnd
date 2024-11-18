
import { RootState } from '../../Statemanagement/store';
import AdminPostCard from './adminPostCard'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../../apiRequests/fetchingRequest';
import { useDispatch } from 'react-redux';
import { initializePostsReducer } from '../../Statemanagement/Slices/postSlice';
import { Poster } from '../../Statemanagement/interfaces';
function Adminposts() {
    const state = useSelector((state: RootState) => state.postSliceState.allPosts);
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
                {state && state.map((post: Poster) => {
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

