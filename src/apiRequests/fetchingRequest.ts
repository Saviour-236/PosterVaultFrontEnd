import {baseAddress} from '../baseAddress';
const fetchPosts = async () => {
    try {
        const response = await fetch(`${baseAddress}/post/get`, {
            method: 'GET',
            credentials: 'include',
        });
        return response.json();
    } catch (error) {
        return error;
    }
}

export {fetchPosts};