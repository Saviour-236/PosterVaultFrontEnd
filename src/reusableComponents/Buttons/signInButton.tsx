import { useNavigate } from "react-router-dom";
function signInButton({ loggedIn }: { loggedIn: boolean }) {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate("/signIn");
    }
    return (
        <>{!loggedIn &&
            <button
                className="border border-[#b1aeae] rounded-md p-2 dark:border-[#2b43cc] hover:bg-[#b3b0b025] dark:hover:bg-[#347deb42] transition-all ease-in-out duration-300 "
                onClick={handleClick}

            >
                
                <svg className="flex-shrink-0 w-5 h-5 text-[#6b6868] transition duration-75 dark:text-[#ffff] group-hover:text-gray-900 dark:text-[#c4c1c1]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"></path>
                </svg>

            </button>
        }
        </>
    )
}

export default signInButton