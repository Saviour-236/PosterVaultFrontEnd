//user upadte requests


// posts update requests

// const updatePostRequest = async (Data : FormData) => {
//     const response = await fetch('https://tile-back-end.onrender.com/post/updatePost', {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//         credentials: 'include',
//         body:Data,
//     })
//     return response
// }


// --------------------------------for local host testing 
const updatePostRequest = async (Data : FormData) => {
    const response = await fetch('http://localhost:3000/post/updatePost', {
        method: 'PUT',
        credentials: 'include',
        body:Data,
    })
    return response
}

// all exports are here
export { updatePostRequest }