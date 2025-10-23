// src/Components/Login/Login.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";


const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");
//   const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        
      })
      .catch((error) => {
        setError(error.message);
      });
  };

    const { googleLogin } = useContext(AuthContext);


  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        
      })
      .catch((error) => {
        console.error("Google Login Error:", error.message);
      });
    }
  return (
    
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col p-10 bg-amber-200 rounded-2xl ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-center font-bold">Welcome Back!
Login to Your Account</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" required className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" required />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className="text-center">or</p>
          <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
<p className="text-xl font-bold">Don't have an account ?<Link  className="text-blue-600" to='/register'>Register</Link>
</p>
        </fieldset>
      </form>
    </div>
  </div>
</div>
  );
};

export default Login
