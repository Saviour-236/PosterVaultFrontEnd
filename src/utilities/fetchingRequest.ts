// fetching  posts fromm the server which are viewable for all users
const fetchPosts = async () => {
    try {
        const response = await fetch('https://tile-back-end.onrender.com/post/get', {
            method: 'GET',
            credentials: 'include',
        });
        return response.json();
    } catch (error) {
        return error;
    }
}

export {fetchPosts};