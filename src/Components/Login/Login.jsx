
import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
// import { toast } from "react-toastify";


const Login = () => {
  const { loginUser,googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
   const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
      const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
     
    e.preventDefault();

    loginUser(email, password)
      .then(() =>navigate("/"))
      .catch((error) => {
        setError(error.message);
      });
    }

  const handleGoogleLogin = () => {
    googleLogin()
        .then(() => navigate("/"))
      .catch((error) => {
        console.error("Google Login Error:", error.message);
      });
    };
  return (
    
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col p-10 bg-amber-200 rounded-2xl ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-center font-bold">Welcome Back!
Login to Your Account</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin}  className="card-body mt-6">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" required className="input" placeholder="Email" />
  <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

                <p className="mt-2">
                  <Link
                    to="/forget-password"
                     state={{ email }}
                    className="text-blue-500"
                  >
                    Forgot Password?
                  </Link>
                </p>
          
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
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
// import React, { useState, useContext } from "react";
// import { Link, useNavigate, useLocation } from "react-router";
// import { toast } from "react-toastify";
// import { AuthContext } from "../Provider/AuthProvider";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { loginUser, signInWithGoogle } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Redirect to original page after login
//   const from = location.state?.from?.pathname || "/";

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       toast.error("Please enter email and password");
//       return;
//     }

//     loginUser(email, password)
//       .then(() => {
//         toast.success("Login successful!");
//         navigate(from, { replace: true });
//       })
//       .catch((err) => toast.error(err.message));
//   };


//   const handleGoogleLogin = () => {
//     signInWithGoogle()
//       .then(() => navigate("/"))
//       .catch(err => alert(err.message));
//   };
//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form className="flex flex-col gap-3" onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="input input-bordered w-full"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="input input-bordered w-full"
//         />
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>

//       <button
//         onClick={handleGoogleLogin}
//         className="btn btn-outline btn-secondary mt-3 w-full"
//       >
//         Login with Google
//       </button>

//       <p className="mt-2 text-center">
//         <Link
//           to="/forget-password"
//           state={{ email }} 
//           className="text-blue-500"
//         >
//           Forgot Password?
//         </Link>
//       </p>
//       <p className="mt-2 text-center">
//         Don't have an account?{" "}
//         <Link to="/register" className="text-blue-500">
//           Register
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default Login;
