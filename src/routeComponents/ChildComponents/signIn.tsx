import { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { initializeUser } from '../../Statemanagement/Slices/userSlice'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      const lodingToast = toast.loading('signing in...');
      // Perform your sign-in logic here (e.g., API call)  
      await fetch('https://tile-back-end.onrender.com/auth/signIn', {
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
          console.log(response)
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
          }
          return response.json(); // Assuming server returns JSON response
        })
        .then(data => {
          toast.dismiss(lodingToast)
          dispatch(initializeUser(data))
          toast.success('Signed in successfully');
          localStorage.setItem('user', JSON.stringify(data));
          if(data.admin){
            navigate('/admin')
          } 
          else{navigate('/');}
        })
        .catch(error => {
          toast.dismiss(lodingToast)
          toast.error(error.message)
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
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md   dark:bg-[#424545]">
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
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
