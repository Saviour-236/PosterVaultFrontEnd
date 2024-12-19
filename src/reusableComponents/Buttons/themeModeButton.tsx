import { useEffect, useState } from "react";
import lightIcon from "../../assets/lightThemeIcon.png";

function themeModeButton() {
    const [darkMode, setDarkMode] = useState<boolean>();// dark mode state

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };
    useEffect(() => {
        if (document.documentElement.classList.contains('dark')) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    });
    return (

        <button
            onClick={toggleDarkMode}
            className="border border-[#b1aeae] rounded-md p-2 dark:border-[#2b43cc] hover:bg-[#b3b0b025] dark:hover:bg-[#347deb42] transition-all ease-in-out duration-300 "
        >


            {darkMode
                ? <img src={ lightIcon } alt="themModes" className="h-5 w-5 min-h-5 rounded-full
                        max-sm:h-5 max-sm:w-5 max-sm:min-h-5
                     " />
                : <svg data-toggle-icon="moon" className="w-5 h-5 text-[#8f8a8a] dark:text-[#b9b6b6]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
                </svg>}
        </button>

    )
}

export default themeModeButton