import { useState } from "react";
import lightIcon from "../../assets/lightThemeIcon.png";
import darkIcon from "../../assets/darkThemeIcon.png";

function themeModeButton() {
    const [darkMode, setDarkMode] = useState(false);// dark mode state

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };
  return (
    <div className="flex items-center  min-w-fit
                ">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full transition-[background-color]  ease-in duration-900 bg-gray-200 
                        
                        dark:hover:bg-[#7e7f80] dark:bg-transparent "
                    >
                        <img src={darkMode ? lightIcon : darkIcon} alt="themModes" className="h-6 w-6 rounded-full
                        
                        max-sm:h-4 max-sm:w-4
                        " />
                    </button>
                    {/* User Profile Drop Down Button */}
                </div>
  )
}

export default themeModeButton