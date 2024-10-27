import { RootState } from "../Statemanagement/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { initializeUser } from "../Statemanagement/Slices/userSlice";
import { useDispatch } from "react-redux";
import { baseAddress } from "../baseAddress";
function adminLayout() {
  const [authTextController, setAuthTextController] = useState(false);
  const [authText, setAuthtext] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const user = useSelector((state: RootState) => state.userSliceState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //actual fetch request for checking user is authorized or not

  const checkAuth = async () => {
    setAuthTextController(true);
    try {
      setAuthtext("Authorizing");
      const response = await fetch(`${baseAddress}/admin/checkAuth`, {
        method: "GET",
        credentials: "include"
      });
      if (response.status !== 200) {
        const data = await response.json();
        throw new Error(data.message);
      }
      setAuthtext("Authorized");
      setAuthTextController(false);
      setAuthorized(true);
      return;
    } catch (error: any) {
      const err = error.message;
      setAuthtext(err);
      navigate("/signIn");
    }
  };
  if (!authText) checkAuth();
  if (Object.keys(user).length === 0) {
    const user = localStorage.getItem('user');
    if (user !== null) {
      dispatch(initializeUser(JSON.parse(user)));
    }
  }

const hidingForMobile=()=>{
  if(window.innerWidth<640){
    return true
  }
  return false
}
  return (
    <>
      {/* just loading purpose and cheking user is it autrized or not */}

      <div> {authTextController && authText}</div>

      {authorized
        && <>
          <div className="border ">admin page layout </div>
          <div className="max-sm:hidden"><Outlet /></div>
          {hidingForMobile() && <div className="border">mobile view : please open in pc </div>}
        </>
        }
    </>
  )
}

export default adminLayout

