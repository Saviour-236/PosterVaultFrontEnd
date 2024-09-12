
// delete post request
async function deletePostRequest(id: string): Promise<Response> {
        const response = await fetch(`http://localhost:3000/post/deletePost/`,{
            body:id,
            method:"DELETE",
            credentials:"include",
        });
        return response
}

export default deletePostRequest;