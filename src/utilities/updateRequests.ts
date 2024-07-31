//user upadte requests


// posts update requests
import type { Post } from "../Statemanagement/Slices/postSlice"

const updatePostRequest = async (post: Post) => {
    console.log('your are in request ')
    const response = await fetch('https://tile-back-end.onrender.com/post/updatePost', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(post)
    })
    return response
}



// all exports are here
export { updatePostRequest }