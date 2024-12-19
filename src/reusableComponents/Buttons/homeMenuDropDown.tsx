import { useState } from "react"
import ThemeModeButton from "./themeModeButton"
import SignUpButton from "./SignUpButton"
import SignInButton from "./signInButton"
import ProfileDropDownButton from "./profileDropDownButton"
function HomeMenuDropDown({ loggedIn }: { loggedIn: boolean }) {
    const [showMenu, setShowMenu] = useState(false)
    const [clickFor, setClickFor] = useState("open")
    const [slide, setSlide] = useState(false);
    const handleMenuClick = (clickFor: string) => {
        if (clickFor.toLocaleLowerCase() == "open") {
            setShowMenu(!showMenu)
            setClickFor("close")
        } else {
            setTimeout(() => setShowMenu(!showMenu), 700);
            setClickFor("open")
        }
        setTimeout(() => setSlide(!slide), 100);
    }
    return (
        <>
            <div>

                <button className="border p-2 rounded-lg dark:border-[#2141d1bd]" onClick={() => handleMenuClick(clickFor)}>
                    <svg className="w-5 h-5 max-sm:h-4 max-sm:w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path>
                    </svg>
                </button>
                
                {/* this willl render when user clik on menu icon */}
                {showMenu
                    && <div className={`fixed z-[55] border h-[92.7vh] ${slide ? "right-0" : "right-[-5rem]"} transition-all ease-in-out duration-1000 top-[8.2vh] w-fit p-4 flex-col space-y-[1rem] rounded-l-xl justify-between border-e bg-[#f0f5f7] dark:bg-[#1032521a] max-sm:top-[3rem] max-sm:h-[50vh] max-sm:dark:border-[#d4d5d613] border-r-0 `}>
                        <ul className="type-none space-y-3 ">
                            {/* this will only render when  user is logInned */}

                            <li>
                                <abbr title="Profile Info">
                                    <ProfileDropDownButton loggedIn={loggedIn} />
                                </abbr>
                            </li>

                            {/* theme button for toggling the theme colours */}
                            <li>
                                <abbr title="Theme Mode">
                                    <ThemeModeButton />
                                </abbr>
                            </li>

                            {/* signIn and LogOut  buttons only render if user in ot logInned*/}
                            <li>
                                <abbr title="Sign In">
                                    <SignInButton loggedIn={loggedIn} />
                                </abbr>
                            </li>
                            <li>
                                <abbr title="Sign Up">
                                    <SignUpButton loggedIn={loggedIn} />
                                </abbr>
                            </li>
                        </ul>
                    </div>}
            </div>
        </>
    )
}

export default HomeMenuDropDown