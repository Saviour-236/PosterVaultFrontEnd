import { useState } from "react";
import SignInIcon from "../../assets/icons-sign-in-24.png";
import { useNavigate } from "react-router-dom";
function signInButton() {
    const [showSignInText, setShowSignInText] = useState(false);// show sign in text state
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate("/signIn");
    }
    return (
        <>
            <button
                className=" p-2 flex space-x-1 w-[3rem] rounded-full transition-[background-color,width]   ease-in duration-[0.5s]  overflow-hidden  justify-center
                        hover:bg-[#def2f7] hover:w-[6rem] hover:justify-start
                        
                        dark:hover:bg-[#313233] dark:bg-transparent "
                onClick={handleClick}
                onMouseEnter={() => setShowSignInText(true)}
                onMouseLeave={() => setShowSignInText(false)}
            >
                <p className='text-nowrap text-[#050e44]'>Sign In</p>
                {showSignInText && <img src={SignInIcon} alt="themModes" className="h-6 w-6 rounded-full max-sm:h-4 max-sm:w-4
                        " />}
            </button>
        </>
    )
}

export default signInButton