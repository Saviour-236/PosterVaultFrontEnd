import {baseAddress} from '../baseAddress';
const fetchPosts = async () => {
    try {
        // console.log("int fecth post")
        const response = await fetch(`${baseAddress}/post/get`, {
            method: 'GET',
            credentials: 'include',
        });
        // console.log("response11")
        return response.json();
    } catch (error) {
        return error;
    }
}

export {fetchPosts};      