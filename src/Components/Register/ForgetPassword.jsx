import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";


const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = () => {
    if (!email) {
      toast.warning("Please enter your email!");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Reset Password</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input input-bordered w-full mb-4"
      />

      <button
        onClick={handleReset}
        className="btn btn-primary w-full font-semibold"
      >
        Send Reset Link
      </button>

    </div>
  );
};

export default ForgetPassword;
