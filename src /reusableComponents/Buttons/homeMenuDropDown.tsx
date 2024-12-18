import { useState } from "react"
import ThemeModeButton from "./themeModeButton"
import SignUpButton from "./SignUpButton"
import SignInButton from "./signInButton"
import ProfileDropDownButton from "./profileDropDownButton"
function HomeMenuDropDown({ loggedIn }: { loggedIn: boolean }) {
    const [showMenu, setShowMenu] = useState(false)
    const [clickFor, setClickFor] = useState("open")
    const [slide, setSlide] = useState(false);
    const handleMenuClick =(clickFor:string)=>{
        if(clickFor.toLocaleLowerCase() == "open"){
            setShowMenu(!showMenu)
            setClickFor("close")
        }else{
            setTimeout(()=>setShowMenu(!showMenu),700);
            setClickFor("open")
        }
       setTimeout(()=>setSlide(!slide),100);
    }
    return (
        <>
            <div>

                <button className="border p-2 rounded-lg " onClick={()=>handleMenuClick(clickFor)}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path>
                    </svg></button>
                {showMenu
                    && <div className={`fixed h-[92.7vh] ${slide?"right-0":"right-[-5rem]"} transition-all ease-in-out duration-1000 top-[8.3vh] w-fit p-4 flex-col space-y-[1rem] justify-between border-e bg-[#f0f5f7] dark:bg-[#0f0f1bec]`}>
                        <ProfileDropDownButton loggedIn={loggedIn} />
                        <ThemeModeButton />
                        <SignInButton loggedIn={loggedIn} />
                        <SignUpButton loggedIn={loggedIn} />

                    </div>}
            </div>
        </>
    )
}

export default HomeMenuDropDown