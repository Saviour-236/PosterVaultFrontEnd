import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Statemanagement/store';
import CartButton from './Buttons/cartButton';
import { Link } from 'react-router-dom';
import CategoriesButton from './Buttons/categoriesButton';
import toast, { Toaster } from 'react-hot-toast';
import { setToastValue } from '../Statemanagement/Slices/globelVariables';
import { initializeUser } from '../Statemanagement/Slices/userSlice';
import { jwtDecode } from "jwt-decode";
import SearchButton from './Buttons/searchButton';
import HomeMenuDropDown from './Buttons/homeMenuDropDown';

const Header: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const userState = useSelector((state: RootState) => state.userSliceState);
    const toastValue = useSelector((state: RootState) => state.globalVariablesSliceState.toastValue);
    const [loggedIn, setLoggedIn] = useState(false);// cheking user signed in or not and conditionally rendering components

    // cheking user signed in or not
    if (!userState.token) {
        //not signed in
        const localStorageUser = localStorage.getItem('user');

        // if user present in local storage then dispatching user to redux store
        if (localStorageUser) {
            //user present in local storage
            const parsedUser = JSON.parse(localStorageUser);
            const decodedToken = jwtDecode(parsedUser.accessToken);
            // console.log("decodedToken", decodedToken);
            const { userInfo } = decodedToken as any;
            // saving user in redux store 
            if (JSON.stringify(userState.userInfo) !== JSON.stringify(userInfo)) {
                dispatch(initializeUser({ userInfo, token: parsedUser.accessToken }))
            };
        }
    }

    useEffect(() => {
        if (userState.userInfo) {
            setLoggedIn(true);
        }
        // showing toast messages
        if (toastValue.message !== '') {
            switch (toastValue.type) {
                case "success": toast.success(toastValue.message);
                    dispatch(setToastValue({ type: '', message: '' }));
                    break;
                case "error": toast.error(toastValue.message);
                    dispatch(setToastValue({ type: '', message: '' }));
                    break;
                case "loading": toast.loading(toastValue.message);
                    dispatch(setToastValue({ type: '', message: '' }));
                    break;
            }
        }
    }, [userState, toastValue]);

    return (
        <header className="flex overflow-auto items-center  relative  shadow-md shadow-[#2e363aa2]  bg-[#f0f5f7] min-w-[100vw] 
        justify-between p-2 
        max-sm:p-1 
        md:justify-between md:px-[1rem]
        dark:bg-[#112031]  dark:border-[#1d1c7aee]  dark:shadow-[#2e2e4d]
        "
        >
            <Toaster />
            {/* Logo */}
            <div className="flex  items-center min-w-fit mx-3  ">

                <span className="flex space-x-2 text-xl font-bold dark:text-white
                w-fit
                max-sm:text-[0.7rem]
                ">
                    <Link to={'/'}>
                        <img src="/fav.png" alt=" Site Logo  " className='h-[1.8rem] w-[1.5rem] ' />
                    </Link>
                    <p className='max-sm:hidden'>Poster vault</p>
                </span>
            </div>
            {/* Right side of header */}
            <div className='items-center  flex gap-1 w-fit '>
                {/* Categories Button  */}
                <div className='max-sm:hidden'><CategoriesButton /></div>
                {/* search bar */}
                <SearchButton />
                {/* cart Button */}
                <CartButton loggedIn={loggedIn} />
                <HomeMenuDropDown loggedIn={loggedIn} />
            </div>
        </header>
    )
};

export default Header;
