import React from 'react';
import Games from '../Games/Games';

const GameCard = ({game,handleViewDetails}) => {

    
 return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between cursor-pointer
                 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="overflow-hidden rounded">
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-48 object-cover mb-3 transform transition-transform duration-500 hover:scale-110"
              />
            </div>
      <h2 className="font-bold text-xl mb-2">{game.title}</h2>

      <div className="flex justify-between mb-2">
        <span className="text-gray-600 font-medium">Developer: {game.developer}</span>
        <span className="text-yellow-400 font-bold">★ {game.ratings}</span>
      </div>

      <button
        onClick={() => handleViewDetails(game)}
        className="mt-auto px-4 py-2 bg-green-500 text-white rounded font-semibold hover:scale-105 transition"
      >
        View Details
      </button>
    </div>
    );
};

export default GameCard;