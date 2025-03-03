import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { toast } from "react-hot-toast";
import { initializeUser } from "../../Statemanagement/Slices/userSlice";
import { useDispatch } from "react-redux";
import { baseAddress } from "../../baseAddress";
import { useNavigate } from "react-router-dom";
function ContinueWithGoogle() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clientId = "1098257020295-lqpr881ti28s4gnsefugupg4a5326k97.apps.googleusercontent.com";
    return (
        <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={ (response) => {
            // Send the token to your backend for verification
            fetch(`${baseAddress}/auth/google`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token: response.credential }),
              credentials: "include", // If using cookies for authentication
            })
            .then(async response => {
              if(response.ok) {
                let data = await response.json();
                localStorage.setItem("token", data.token);
                dispatch(initializeUser({userInfo: data.user, token: data.token}));
                toast.success("Login Successful");
                navigate("/");
              }
            })
            .catch(err =>{console.error("Login Failed:", err)});
            }}
          onError={() => console.log("Google Login Failed")}
        />
      </GoogleOAuthProvider>
  )
}

export default ContinueWithGoogle