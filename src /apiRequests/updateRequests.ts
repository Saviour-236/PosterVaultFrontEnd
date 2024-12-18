//All upadte related requests
import {baseAddress} from '../baseAddress';

const updatePostRequest = async (Data : FormData) => {
    const response = await fetch(`${baseAddress}/post/updatePost`, {
        method: 'PUT',
        credentials: 'include',
        body:Data,
    })
    return response
}

// all exports are here
export { updatePostRequest }