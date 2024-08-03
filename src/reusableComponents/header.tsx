import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Statemanagement/store';
import logo from '../assets/profilePic.png';
import lightIcon from '../assets/lightThemeIcon.png';
import darktIcon from '../assets/darkThemeIcon.png';
import { initializeUser } from '../Statemanagement/Slices/userSlice';
const Header: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const user = useSelector((state: RootState) => state.userSliceState);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };
    if (!(Object.keys(user).length === 0)) {
        const user = localStorage.getItem('user');
           if(user) dispatch(initializeUser(JSON.parse(user)));
    }
    return (
        <header className="flex items-center justify-between p-4   shadow-md rounded-b-[1rem] ">
            <div className="flex items-center">
                <span className="ml-2 text-xl font-bold dark:text-white">𝓣𝓮𝔁𝓸𝓣𝓲𝓵𝓮𝓼</span>
            </div>
            <div className="flex items-center">
                <button
                    onClick={toggleDarkMode}
                    className="mr-4 p-2 rounded-full transition-[background-color]  ease-in duration-900 bg-gray-200 dark:hover:bg-[#7e7f80] dark:bg-transparent "
                >
                    <img src={darkMode ? lightIcon : darktIcon} alt="themModes" className="h-6 w-6 rounded-full " />
                </button>
                {user.profilePic && <img src={user.profilePic ? user.profilePic : logo} alt="Profile" className="h-10 w-10 rounded-full " />}
            </div>
        </header>
    );
};

export default Header;
