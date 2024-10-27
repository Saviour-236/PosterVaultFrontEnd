import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Statemanagement/store';
import logo from '../assets/profilePic.png';
import lightIcon from '../assets/lightThemeIcon.png';
import darktIcon from '../assets/darkThemeIcon.png';
import { initializeUser } from '../Statemanagement/Slices/userSlice';
import Cart from './Buttons/cartButton';
import { Link, useNavigate } from 'react-router-dom';
const Header: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);// dark mode state
    const [searchValue, setSearchValue] = useState('');// search value state
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.userSliceState);
    const Navigate = useNavigate();
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

    // check if user is logged in and initialize user to the store 
    if (!(Object.keys(user).length === 0)) {
        const user = localStorage.getItem('user');
        if (user) dispatch(initializeUser(JSON.parse(user)));
    }

    //handling logo click
    const logoClickhandler = () => {
        if (window.location.href = '/') {
            return;
        }
        else {
            Navigate('/', { replace: false });
        }
    };
    return (
        <header className="flex items-center bg-[#f0f5f7] justify-between p-2  shadow-md rounded-b-[1rem] 
        max-sm:p-1
        dark:bg-[#112031]
        ">

            {/* Logo */}
            <div className="flex items-center">

                <span className="ml-2 flex space-x-1 text-xl font-bold dark:text-white
                
                max-sm:text-[0.7rem] max-sm:hidden
                ">
                    <Link to={'/'}>
                        <img src="/fav.png" alt=" Site Logo  " className='h-[1.8rem] ' />
                    </Link>
                    <p>Poster vault</p>
                </span>
            </div>
            <div className=' flex gap-3  '>

                {/* search bar */}
                <span className='border flex items-center p-2 rounded-lg transition-[border] duration-200 ease-in space-x-2 border-gray-200 

                hover:border-[#c1c4c5]
                
                dark:bg-transparent dark:text-white dark:border-[#254f7a] dark:hover:border-[#326b91] '>

                    {/* input field */}
                    <input type="text" id='searchBox' onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                        placeholder="search......"
                        className='bg-transparent w-[9rem]  min-w-[1rem] outline-none text-[#616769]
                    
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

                {/* cart Icon */}
                <Cart />

                {/* theme Icon */}
                <div className="flex items-center  min-w-fit">
                    <button
                        onClick={toggleDarkMode}
                        className="mr-4 p-2 rounded-full transition-[background-color]  ease-in duration-900 bg-gray-200 
                        
                        dark:hover:bg-[#7e7f80] dark:bg-transparent "
                    >
                        <img src={darkMode ? lightIcon : darktIcon} alt="themModes" className="h-6 w-6 rounded-full
                        
                        max-sm:h-4 max-sm:w-4
                        " />
                    </button>
                    {user.profilePic && <img src={user.profilePic ? user.profilePic : logo} alt="Profile" className="h-10 w-10 rounded-full " />}

                </div>
            </div>
        </header>
    )
};

export default Header;
