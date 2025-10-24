import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name && !photoURL) return;
    updateUserProfile(name, photoURL);
  };

  return (
    <div className="container mx-auto mt-10 px-4 grid grid-cols-1 gap-4 md:grid-cols-1">

      {/* Card 1: User Info */}
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-full max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-3">My Profile</h2>
        {photoURL ? (
          <img
            src={photoURL}
            alt="user"
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-400 mb-3"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center text-lg font-bold text-blue-700 mb-3">
            {name?.[0] || "U"}
          </div>
        )}
        <h3 className="text-lg font-semibold">{name || "User"}</h3>
        <p className="text-gray-500 text-sm">{user?.email}</p>
      </div>

      {/* Card 2: Update Inputs */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-3 text-center">Update Profile</h2>
        <form onSubmit={handleUpdate} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full text-sm"
          />

          <input
            type="text"
            placeholder="Enter Image URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full text-sm"
          />

          <button
            type="submit"
            className="btn btn-primary w-full text-sm font-semibold"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
