import { RootState } from "../Statemanagement/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet,  } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToastValue } from "../Statemanagement/Slices/globelVariables";
function adminLayout() {
  const [authorized, setAuthorized] = useState<Boolean>();
  const userState = useSelector((state: RootState) => state.userSliceState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  //actual fetch request for checking user is authorized or not
  // const checkAuth = async () => {
  //   // setAuthTextController(true);
  //   //cheking if user has token or not
  //   console.log("making request");
  //   try {
  //     // console.log("user token", user.token);
  //     const response = await fetch(`${baseAddress}/admin/checkAuth/${user.token}`, {
  //       method: "GET",
  //     });
  //     if (response.status !== 200) {
  //       const data = await response.json();
  //       throw new Error(data.message);
  //     }

  //     // authorizedation  complete
  //     const data = await response.json();
  //     dispatch(setToastValue({ type: "success", message: data.message }));
  //     setAuthorized(true);
  //   } catch (error: any) {
  //     dispatch(setToastValue({ type: "error", message: error.message }));
  //     // console.log("got error", error.message);
  //   }
  //   finally {
  //     setAuthResolved(true);
  //   }
  // }

  //if user has token then go to auth page
  // console.log("rendering admin layout time after declaring function ");



  //hiding the content for mobiles
  const hidingForMobile = () => {
    if (window.innerWidth < 640) {
      return true
    }
    return false
  }


  useEffect(() => {

    //cheking that user is logged in or not -- conditin if user has token then user is logged in
    if( userState.token == null ){
      console.log("user token token is null ", userState.token);
      dispatch(setToastValue({ type: "error", message: "please sign in first" }));
      navigate("/signin");
    }else{
      // console.log("user token", userState.token,userState.userInfo);
      setAuthorized(true);
      dispatch(setToastValue({ type: "success", message: "Welcome Admin" }));
    }
  }, [setAuthorized]);
  return (
    <>
      {/* just loading purpose and cheking user is it autrized or not */}
      <>
        {authorized
          && <>
            {hidingForMobile()
              ? <div className="border">mobile view : please open in pc </div>
              : <div className="max-sm:hidden"><Outlet /></div>
            }
          </>
        }
      </>

    </>
  )
}

export default adminLayout

