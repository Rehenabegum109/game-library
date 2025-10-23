
import React, { useContext, useState } from "react";

import { useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = () => {
    if (!email) 
      return alert("Enter email");
    resetPassword(email)
      .then(() => alert("Password reset email sent!"))
      .catch(err => alert(err.message));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="input input-bordered w-full mb-3" />
      <button onClick={handleReset} className="btn btn-primary w-full">Send Reset password</button>
    </div>
  );
};

export default ForgetPassword;
