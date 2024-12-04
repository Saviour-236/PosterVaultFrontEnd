
// Poster interface 
export interface Poster {
    _id: string;
    title: string;
    category: string;
    description: string;
    views: number;
    price: number;
    imageUrl: string;
    alt: string;
    author: string;
    enable: boolean;
    upLoadingDate: Date;
    lastUpdated: Date;
}

// User interface
export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    profilePic: string;
    role: string;
    phone: string;
    address: {
        city: string;
        state: string;
        country: string;
        pincode: string;
    };
    whishlist: Poster[];
    cart: Poster[];
    orders: Poster[];
    verified: boolean;
    //password: string; hide password from the client side
    purchaseHistory: {
        date: Date;
        items: Poster[];
    }[];
}

// cartState Interface
export interface cartPoster {
    poster: Poster;
    quantity: number;
}