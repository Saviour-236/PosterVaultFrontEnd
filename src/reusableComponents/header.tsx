import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Statemanagement/store';
import logo from '../assets/profilePic.png';
import lightIcon from '../assets/lightThemeIcon.png';
import darktIcon from '../assets/darkThemeIcon.png';
import reactlogo from '../assets/react.svg';
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
    else {
        console.log('not signed in');
    }
    return (
        <header className="flex items-center justify-between p-4   shadow-md rounded-b-[1rem]">
            <div className="flex items-center">
                <img src={reactlogo} alt="React Logo" className="h-10 w-10" />
                <span className="ml-2 text-xl font-bold dark:text-white">MyApp</span>
            </div>
            <div className="flex items-center">
                <button
                    onClick={toggleDarkMode}
                    className="mr-4 p-2 rounded-full bg-gray-200 dark:bg-gray-600 dark:text-white"
                >
                    <img src={darkMode ? lightIcon : darktIcon} alt="themModes" className="h-8 w-8 rounded-full " />
                </button>
                {user.name}
                <img src={user.profilePic ? user.profilePic : logo} alt="Profile" className="h-10 w-10 rounded-full " />
            </div>
        </header>
    );
};

export default Header;
