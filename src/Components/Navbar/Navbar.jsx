import React, { useContext } from 'react';
import Logo from '../../assets/image/e584c0a059b6c7c4f4c23852153e5521.webp'
import {  Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
const Navbar = () => {
  const { user, logout } = useContext(AuthContext)

const handleLogout = () => {
    logout()
      .then(() => 
          toast.success("Logged out successfully!"))
      .catch((err) => console.error(err));
  };

  const links = (
    <>
    <div className='flex flex-col lg:flex-row gap-5'>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : "hover:text-blue-400"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/games"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : "hover:text-blue-400"
        }
      >
        Games
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : "hover:text-blue-400"
        }
      >
        My Profile
      </NavLink>
      </div>
      
    </>
  );
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <img className='w-[60px]' src={Logo} alt="logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
    <div className="navbar-end gap-4">
        {user ? (
          <>
            {/* User Info */}
            <div className="flex items-center gap-3">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-blue-400"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-lg font-bold text-blue-700">
                  {user.displayName?.[0] || "U"}
                </div>
              )}
              <span className="font-semibold hidden sm:block">
                {user.displayName || "User"}
              </span>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="btn btn-outline bg-green-500  text-white font-semibold"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline bg-green-500">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline bg-green-500">
              Register
            </Link>
          </>
        )}
      </div>
</div>
    );
};

export default Navbar;