import { RootState } from "../../Statemanagement/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { initializeUser } from "../../Statemanagement/Slices/userSlice";
import { useDispatch } from "react-redux";
function adminLayout() {
  const [authTextController, setAuthTextController] = useState(false);
  const [authText, setAuthtext] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const user = useSelector((state: RootState) => state.userSliceState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //
  const checkAuth = async () => {
    setAuthTextController(true);
    try {
      setAuthtext("Authorizing");
      const response = await fetch("https://tile-back-end.onrender.com/admin/checkAuth", {
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
    } catch (error:any) {
      const err = error.message;
      setAuthtext(err);
      navigate("/signIn");
    }
  };
  if (!authText) checkAuth();
  if (Object.keys(user).length === 0) {
    const user = localStorage.getItem('user');
    console.log(user)
    if (user !== null) {
      console.log('user is not null')
      dispatch(initializeUser(JSON.parse(user)));
    }
  }
  return (
    <>
      {/* just loading purpose and cheking user is it autrized or not */}

      <div> {authTextController && authText}</div>

      {authorized && <div>admin page layout </div>  && <Outlet />}
    </>
  )
}

export default adminLayout

