// All delete related  requests
import {baseAddress} from '../baseAddress';

async function deletePostRequest(id: string,token:string): Promise<Response> {
        const response = await fetch(`${baseAddress}/post/deletePost/${id}`,{
            method:"DELETE",
            credentials:"include",
            headers:{
                authToken:token,
            }
        });
        return response
}

export default deletePostRequest;