import { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { initializeUser } from '../Statemanagement/Slices/userSlice'
import { useNavigate } from 'react-router-dom';
import { baseAddress } from '../baseAddress';
import { setToastValue } from '../Statemanagement/Slices/globelVariables';
import { jwtDecode } from 'jwt-decode';
import ContinueWithGoogle from '../reusableComponents/Buttons/continueWithGoogle';
const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      // const lodingToast = toast.loading('signing in...');
      // Perform your sign-in logic here (e.g., API call)  
      await fetch(`${baseAddress}/auth/signIn`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(async response => {
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
          }
          return response.json(); // Assuming server returns JSON response
        })
        .then(data => {
          // toast.dismiss(lodingToast)
          // console.log(data);
          const token = data.token;
          const decodedToken = jwtDecode(token);
          // console.log(decodedToken);
          const { userInfo } = decodedToken as any;
          // console.log(userInfo);
          dispatch(initializeUser({ userInfo, token }));
          localStorage.setItem('user', JSON.stringify({ accessToken: data.token }));
          dispatch(setToastValue({ type: "success", message: 'Signed in successfully' }));
          if (userInfo.role === "admin") {
            navigate('/admin', { replace: false });
          }
          else { navigate('/', { replace: false }); }
        })
        .catch(error => {
          dispatch(setToastValue({ type: "error", message: error.message }))
        });
    }
  };

  const validateForm = () => {
    if (!email || !password) {
      setError('Both fields are required.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email address is invalid.');
      return false;
    }
    setError('');
    return true;
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8  rounded-lg shadow-md w-full max-w-md   dark:bg-[#424545]">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline dark:bg-[#424545] "
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#424545] "
              required
            />
          </div>
          <div className='flex p-2 justify-center'>
            {/* <button type="button"
              className="px-5 py-3 inline-flex items-center border rounded-lg text-[#333] text-base tracking-wider font-semibold  outline-none shadow-lg bg-gray-50 hover:bg-gray-100 active:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="22px" fill="#fff" className="inline mr-3" viewBox="0 0 512 512">
                <path fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00" />
                <path fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58" />
                <path fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52" />
                <path fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6" />
                <path fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48" />
                <path fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132" />
              </svg>
              Continue with Google
            </button> */}
            <ContinueWithGoogle/>
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
