import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name || !photoURL) {
      toast.error("Please enter both Name and Image URL!");
      return;
    }
    setLoading(true);
    try {
      await updateUserProfile(name, photoURL);
      toast.success("Profile updated successfully!");
      navigate("/"); // Update হলে home page-এ redirect
    } catch (err) {
      toast.error("Failed to update profile!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4 grid grid-cols-1 gap-6 md:grid-cols-1">
      {/* Card 1: User Info */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center w-full max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>
        {photoURL ? (
          <img
            src={photoURL}
            alt="user"
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-400 mb-4"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-lg font-bold text-blue-700 mb-4">
            {name?.[0] || "U"}
          </div>
        )}
        <h3 className="text-lg font-semibold">{name || "User"}</h3>
        <p className="text-gray-500 text-sm">{user?.email}</p>
      </div>

      {/* Card 2: Update Inputs */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
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
            className={`btn btn-primary w-full text-sm font-semibold ${
              loading ? "loading" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
