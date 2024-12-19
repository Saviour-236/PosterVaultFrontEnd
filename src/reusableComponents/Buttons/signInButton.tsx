import { useState } from "react";
import SignInIcon from "../../assets/icons-sign-in-24.png";
import { useNavigate } from "react-router-dom";
function signInButton({loggedIn}:{loggedIn:boolean}) {
    const [showSignInText, setShowSignInText] = useState(false);// show sign in text state
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate("/signIn");
    }
    return (
        <>{!loggedIn &&
            <button
                className=" p-2 flex space-x-1 w-[3rem] rounded-full transition-[background-color,width]   ease-in duration-[0.5s]  overflow-hidden  justify-center  min-w-fit shadow-lg h-fit
                        hover:bg-[#def2f7] hover:w-[6rem] hover:justify-start
                        
                        dark:hover:bg-[#1083f742] dark:bg-transparent  "
                onClick={handleClick}
                onMouseEnter={() => setShowSignInText(true)}
                onMouseLeave={() => setShowSignInText(false)}
            >
                <p className='text-nowrap  text-[#050e44] dark:text-white'>Sign In</p>
                {showSignInText && <img src={SignInIcon} alt="themModes" className="h-6 w-6 rounded-full max-sm:h-4 max-sm:w-4
                        " />}
            </button>
            }
        </>
    )
}

export default signInButton