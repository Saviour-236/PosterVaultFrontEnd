import { RootState } from "../../Statemanagement/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { initializeUser } from "../../Statemanagement/Slices/userSlice";
import { useDispatch } from "react-redux";
function adminLayout() {
  const [authTextController, setAuthTextController] = useState(false);
  const [authText, setAuthtext] = useState("");
  const [authorized,setAuthorized] = useState(false);
  const user = useSelector((state:RootState) => state.userSliceState);
  const dispatch = useDispatch();

  const checkAuth = async () => {
      setAuthTextController(true);
      try {
          setAuthtext("Authorizing");
          const response = await fetch("http://localhost:3000/admin/checkAuth", {
              method: "GET",
              credentials: "include"
          });
          if (response.status == 401) {
              const data = await response.json();
              throw new Error(data.message);
          }
          setAuthtext("Authorized");
          setAuthTextController(false);
            setAuthorized(true);
          return;
      } catch (error) {
          setAuthtext("sorry UnAuthorized ");
          window.location.href = "/signIn";
      }
  };
  if (!authText) checkAuth();
  if (Object.keys(user).length === 0) {
    const user = localStorage.getItem('user');
    if (user !== null) {
        dispatch(initializeUser(JSON.parse(user)));
    } else {
        console.log('user not present in local storage');
    }
}
  return (
    <>
    <div>{authTextController && authText}</div>{/* just loading purpose and cheking user is it autrized or not */}
    {authorized && <div>admin page layout </div> && <Outlet />}
    
    </>
  )
}

export default adminLayout

