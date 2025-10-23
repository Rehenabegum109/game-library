import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Games = () => {
  const {user} =useContext(AuthContext)
    const data =useLoaderData();
    const navigate =useNavigate()
  const handleViewDetails = (game) => {
    if (!game) return;
      if (user) {
      
      navigate(`/game/${game.id}`);
    } else {
      
      navigate("/login");
    }
  
  
  };
    return (
         <div className="bg-base-300 pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {data.map((game) => {
        const { id, coverPhoto, developer, title, ratings } = game;

        return (
          <div
            key={id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-4 flex flex-col justify-between cursor-pointer"
          >
            {/* Image */}
            <img
              src={coverPhoto}
              alt={title}
              className="w-full rounded h-48 object-cover mb-3"
            />

            {/* Title */}
            <h2 className="font-bold text-xl mt-4 mb-2">{title}</h2>

            {/* Developer & Rating */}
            <div className="flex justify-between mb-4">
              <div className="text-gray-600 font-medium">Developer: {developer}</div>
              <div className="text-yellow-400 font-bold">★ {ratings}</div>
            </div>

            {/* View Details Button */}
            <button
              onClick={() => handleViewDetails(game)}
              className="mt-auto px-4 py-2 bg-green-500 text-white rounded font-semibold transition transform hover:scale-105"
            >
              View Details
            </button>
          </div>
        );
      })}
    </div>
    );
};

export default Games;