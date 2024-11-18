import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../Statemanagement/store";

function profileDropDownButton() {
    const [showDropDown, setShowDropDown] = useState(false);
    const state = useSelector((state: RootState) => state.userSliceState);
    const handleMenuClick = () => {
        setShowDropDown(!showDropDown);
    }
    return (
        <>
            <div className="dropdown relative">
                {/* Dropdown menu Icon or button */}
                <button className="btn space-x-2 p-1 flex items-center rounded   focus:btn-outline focus:text-orange-500 normal-case text-orange-500 ml-2"
                    onClick={handleMenuClick}>
                    <div className="w-9 h-9 border border-[#ffffff] rounded-full">
                        {state.userInfo.profilePic !== ""
                            ? <img src={state.userInfo.profilePic} alt="Profile Pic" className="w-8 h-8 rounded-full" />
                            : <img src="https://avatars.githubusercontent.com/u/26052038?v=4" alt="Profile Pic avatar" className="w-8 h-8 rounded-full" />

                        }
                    </div>
                    <svg width="15px" height="15px"
                        className="h-2 w-2  fill-black opacity-60 inline-block dark:fill-white "
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                    </svg>
                </button>
                {/* Muenu Items */}
                {
                    showDropDown
                    && <div className="bg-[#ffffff] fixed rounded-md right-0 m-1 border border-[#64b1e4]  z-[1] menu p-2 shadow bg-base-300 rounded-box w-80
                    dark:bg-[#061029]
                    ">
                        <div className="rounded-lg bg-base-300 p-3 drop-shadow-xl divide-y divide-neutral">
                            {/* profiele section like pic , name and , email */}
                            <div className="flex space-x-4 items-center p-4">
                                <div className="flex mr-auto items-center space-x-4">
                                    <img src={state.userInfo.profilePic} alt="Profile Pic" className="w-16 h-16 shrink-0 rounded-full" />
                                    <div className="space-y-2 flex flex-col flex-1 truncate">
                                        <div className="relative leading-tight text-gray-900">
                                            <span className="flex">
                                                <span className="truncate relative pr-8 text-[#0a0a0a]
                                                dark:text-[#278cff]">
                                                    {state.userInfo.firstName} {state.userInfo.lastName}
                                                </span>
                                            </span>
                                        </div>
                                        <p className="font-normal text-xs leading-tight truncate
                                        dark:text-[#b7b6fc]
                                        ">{state.userInfo.email}</p>
                                    </div>
                                </div>
                            </div>

                            {/* navigatin links like setting page cart page , histroy page etc */}
                            <div aria-label="navigation" className="py-2 ">
                                <nav className="grid gap-1 ">
                                    <Link to="/" className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md
                                    dark:hover:bg-[#161655]  dark:hover:shadow-md
                                    ">
                                        <svg className="w-7 h-7 
                                        dark:fill-[#4a4cf3]
                                        " fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5ZM9 5H5V9H9V5Z" /><path d="M3 15C3 13.8954 3.89543 13 5 13H9C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15ZM9 15H5V19H9V15Z" /><path d="M13 5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H15C13.8954 11 13 10.1046 13 9V5ZM19 5H15V9H19V5Z" /><path d="M13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15ZM19 15H15V19H19V15Z" />
                                        </svg>
                                        <span className="dark:text-[#949090]"> My Orders </span>
                                    </Link>

                                    {/* Wishlist link */}
                                    <Link to="/" className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md
                                    dark:hover:bg-[#161655] dark:hover:shadow-md">
                                        <img data-v-67ec16fc=""
                                            srcSet="https://img.icons8.com/?size=80&amp;id=uInPGSbVMJz8&amp;format=png 1x, https://img.icons8.com/?size=160&amp;id=uInPGSbVMJz8&amp;format=png 2x" width="80" height="80" alt="Wishlist icon" className="h-7 w-7 fill-white"></img>
                                        <span className="dark:text-[#949090]"> Wishlist </span>
                                    </Link>

                                    {/* Purchase History link */}
                                    <Link to="/" className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md
                                    dark:text-[#4a4cf3] dark:hover:bg-[#161655] dark:hover:shadow-md
                                    ">
                                        <img data-v-4d427815="" className="app-preview__image-origin h-7 w-7" srcSet="https://img.icons8.com/?size=256w&amp;id=70301&amp;format=png 1x, https://img.icons8.com/?size=512w&amp;id=70301&amp;format=png 2x" width="256" height="256" alt="History icon" />

                                        <span className="dark:text-[#949090]">Purchase History</span>
                                    </Link>
                                    {/* setting link */}
                                    <Link to="#" className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg  focus:outline-none hover:bg-gray-100 rounded-md

                                    dark:hover:bg-[#161655] dark:hover:shadow-md 
                                    ">
                                        <svg className="w-7 h-7
                                        " viewBox="0 0 24 24" stroke-width="2" stroke="#4a4cf3" fill="none">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                        </svg>
                                        <span className="dark:text-[#949090]">Setting</span>
                                    </Link>
                                </nav>
                            </div>
                            {/* Log out button  */}
                            <div className="pt-2">
                                <button type="button" className="flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md
                                dark:hover:bg-[#161655] dark:hover:shadow-md
                                ">
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" stroke-width="2" stroke="#b00707" fill="none">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                                        <path d="M9 12h12l-3 -3">
                                        </path>
                                        <path d="M18 15l3 -3"></path>
                                    </svg>
                                    <span className="dark:text-[#949090]">LogOut</span>
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>)
}

export default profileDropDownButton