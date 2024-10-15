// All delete related  requests
import {baseAddress} from '../baseAddress';

async function deletePostRequest(id: string): Promise<Response> {
    console.log(id)
        const response = await fetch(`${baseAddress}/post/deletePost/${id}`,{
            method:"DELETE",
            credentials:"include",
        });
        return response
}

export default deletePostRequest;