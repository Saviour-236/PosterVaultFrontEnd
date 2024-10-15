
// Post interface 
export interface Post {
    _id: string;
    title: string;
    description: string;
    views: number;
    price: number;
    imageUrl: string;
    alt: string;
    author: string;
    enable: boolean;
}

// User interface
export interface User{
    _id: string;
    name: string;
    email: string;
    profilePic: string;
    admin: boolean;
}