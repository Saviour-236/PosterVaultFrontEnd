import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Statemanagement/store';
import lightIcon from '../assets/lightThemeIcon.png';
import darktIcon from '../assets/darkThemeIcon.png';
import Cart from './Buttons/cartButton';
import { Link } from 'react-router-dom';
import CategoriesButton from './Buttons/categoriesButton';
import SignInButton from './Buttons/signInButton';
import SignUpButton from './Buttons/SignUpButton';
import UserProfileDropDownButton from './Buttons/profileDropDownButton';
import toast, { Toaster } from 'react-hot-toast';
import { setToastValue } from '../Statemanagement/Slices/globelVariables';
import { initializeUser } from '../Statemanagement/Slices/userSlice';
import { jwtDecode } from "jwt-decode";

const Header: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);// dark mode state
    const [searchValue, setSearchValue] = useState('');// search value state
    const dispatch = useDispatch<AppDispatch>();
    const userState = useSelector((state: RootState) => state.userSliceState);
    const toastValue = useSelector((state: RootState) => state.globalVariablesSliceState.toastValue);

    // cheking user signed in or not
    if (!userState.token) {
        const localStorageUser = localStorage.getItem('user');
        // console.log("localstorage", localStorageUser);
        
        // if user present in local storage then dispatching user to redux store
        if (localStorageUser) {
            const parsedUser = JSON.parse(localStorageUser);
            const decodedToken = jwtDecode(parsedUser.accessToken) ;
            // console.log("decodedToken", decodedToken);
            const { userInfo } = decodedToken as any;
            // saving user in redux store 
            if (JSON.stringify(userState.userInfo) !== JSON.stringify(userInfo)) {
                dispatch(initializeUser({ userInfo, token: parsedUser.accessToken }))
            };
        }
    }

    //handling search event 
    const handleSearchEvent = () => {
        console.log(searchValue);
    };

    //handling dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };
   


    useEffect(() => {

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
        <header className="flex overflow-auto items-center border border-[#e1e2e4]  top-[1rem] relative  shadow-md shadow-[#2e363aa2] mb-2 bg-[#f0f5f7] justify-around p-2 rounded-3xl mx-2 
        max-sm:p-1
        lg:justify-between lg:px-[2rem]
        dark:bg-[#112031]  dark:border-[#1d1c7aee]  dark:shadow-[#272361]
        "
        >
            <Toaster />
            {/* Logo */}
            <div className="flex items-center min-w-fit mx-3 ">

                <span className="ml-2 flex space-x-2 text-xl font-bold dark:text-white
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
                <CategoriesButton />
                
                {/* search bar */}
                <span className='border border-[#9f9fa3] flex items-center p-2 rounded-xl transition-[border] duration-200 ease-in space-x-2  shadow-md shadow-[#070808a2]

                hover:border-[#c1c4c5]
                
                dark:bg-transparent dark:text-white dark:border-[#254f7a] dark:hover:border-[#326b91] '>

                    {/* search  field */}
                    <input type="text" id='searchBox' onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                        placeholder="search......"
                        className='bg-transparent w-[9rem] h-[1rem]  min-w-[1rem] outline-none text-[#616769] text-[0.8rem]
                    
                    max-sm:w-[5rem] max-sm:h-[1rem] max-sm:text-[0.7rem]
                    
                    dark:text-[rgb(173,180,182)]' />
                    <label htmlFor="searchBox" onClick={() => handleSearchEvent()} className=''>
                        <svg className="w-4 h-4 me-2 text-[#888f92]
                       
                        hover:cursor-pointer hover:text-[#2091ce]

                        max-sm:w-3 max-sm:h-3 
                       
                        dark:text-[#30679e]  
                        dark:hover:text-[#328de7] "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"

                            fill="none"
                            viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </label>
                </span>

                {/* cart Button */}
                <Cart />


                {/* rendring components bases on user log inned or not  */}
                {Object.keys(userState).length == 0
                    && <div className=' flex space-x-1'>
                        {/* Sign In button */}
                        <SignInButton />

                        {/* SignUP button */}
                        <SignUpButton />
                    </div>}

                {/* theme Icon */}
                <div className="flex items-center  min-w-fit">
                    <button
                        onClick={toggleDarkMode}
                        className="mr-3 p-2 rounded-full transition-[background-color]  ease-in duration-900 bg-gray-200 
                        
                        dark:hover:bg-[#7e7f80] dark:bg-transparent "
                    >
                        <img src={darkMode ? lightIcon : darktIcon} alt="themModes" className="h-6 w-6 rounded-full
                        
                        max-sm:h-4 max-sm:w-4
                        " />
                    </button>
                    {/* User Profile Drop Down Button */}
                    {userState.userInfo && <UserProfileDropDownButton />}
                </div>
            </div>
        </header>
    )
};

export default Header;
