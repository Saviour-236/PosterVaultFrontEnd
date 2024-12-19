import { useDispatch } from "react-redux";
import { setToastValue } from "../../Statemanagement/Slices/globelVariables";
import { clearUserReducer } from "../../Statemanagement/Slices/userSlice";
function logOutButton() {
    const dispatch= useDispatch();
    const handleLogOut = () => {
        localStorage.clear();
        dispatch(setToastValue({ type: "success", message: "Logged out successfully" }));
        dispatch(clearUserReducer());
        dispatch(setToastValue({ type: "success", message: "Please Visit again" }));
    }
    return (
        <>
            <div className="pt-2">
                <button 

                className="flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md
                 dark:hover:bg-[#161655] dark:hover:shadow-md
                                "
                onClick={handleLogOut}
                                >
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
        </>
    )
}

export default logOutButton