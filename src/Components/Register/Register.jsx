// src/Components/Register/Register.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

// import { useNavigate } from "react-router";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=[\]{};:'"\\|,.<>/?]).{6,}$/;
            if(!passwordPattern.test(password)) {
              // console.log('password did not match')
              setError('must error be 6 characters you should one uppercase ,lowercase,and special character')
              return;
            }

    createUser(email, password, name,photo)
      .then(() => {
              toast.success("Registration successful!");
              navigate("/");
        
      })
      .catch((err) => (err.message));
  };
   
  return (
   <div className="hero bg-base-200 min-h-screen">
     <div className="hero-content flex-col p-10 bg-amber-200 rounded-2xl ">
       <div className="text-center lg:text-left">
         <h1 className="text-5xl text-center font-bold">Register Now! to Your Account</h1>
         
       </div>
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <form onSubmit={handleRegister} className="card-body">
           <fieldset className="fieldset">

                <label className="label">Name</label>
             <input type="text" name="name" className="input" placeholder="Write your name" />

            <label className="label">Photo Url</label>
             <input type="text" name="photo" className="input" placeholder="photo url" />
             <label className="label">Email</label>
             <input type="email" name="email"  required className="input" placeholder="Email" />
             <label className="label">Password</label>
             <input type="password" name="password"   className="input" placeholder="Password" required />
          
    
             {error && <p className="text-red-500 text-sm">{error}</p>}
             
             <p className="text-xl font-bold">Already have an account ?{''}<Link  className="text-blue-600" to='/login'>Login</Link>
             
   </p>
             <button type="submit" className="btn btn-neutral mt-4">Register</button>
             
            
   
           </fieldset>
         </form>
       </div>
     </div>
   </div>
  );
};

export default Register;
