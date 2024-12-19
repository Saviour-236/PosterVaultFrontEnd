import { useEffect, useState } from "react";
import lightIcon from "../../assets/lightThemeIcon.png";
import darkIcon from "../../assets/darkThemeIcon.png";

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
        <div className="flex items-center justify-center  min-w-fit
                ">
            <button
                onClick={toggleDarkMode}
                className="p-1  rounded-full transition-[background-color]  ease-in duration-900 bg-gray-200 min-h-fit
                        dark:hover:bg-[#7e7f80] dark:bg-transparent "
            >
                <img src={darkMode ? lightIcon : darkIcon} alt="themModes" className="h-6 w-6 min-h-6 rounded-full
                        max-sm:h-5 max-sm:w-5 max-sm:min-h-5
                        " />
            </button>
        </div>
    )
}

export default themeModeButton