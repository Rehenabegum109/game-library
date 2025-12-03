import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Games = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData(); 
  const navigate = useNavigate();

  const [sortOrder, setSortOrder] = useState("asc");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleViewDetails = (game) => {
    if (!game) return;
    navigate(`/game/${game.id}`);
  };

  // Filter & sort games
  const filteredGames = data
    .filter(game => categoryFilter === "All" ? true : game.category === categoryFilter)
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  const categories = ["All", ...new Set(data.map(g => g.category))];

  return (
    <div className="bg-base-300 pt-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 mb-10">

        {/* Sorting & Filtering */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <div>
            <label className="mr-2 font-semibold">Category:</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border rounded px-3 py-1"
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mr-2 font-semibold">Sort:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded px-3 py-1"
            >
              <option value="asc">Ascending</option>
              <option value="desc"> Descending</option>
            </select>
          </div>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => {
            const { id, coverPhoto, developer, title, ratings } = game;

            return (
              <div
                key={id}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between cursor-pointer
                           transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="overflow-hidden rounded">
                  <img
                    src={coverPhoto}
                    alt={title}
                    className="w-full h-48 object-cover mb-3 transform transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <h2 className="font-bold text-xl mt-2">{title}</h2>

                <div className="flex justify-between mb-4 text-sm mt-2">
                  <div className="text-gray-600">Dev: {developer}</div>
                  <div className="text-yellow-400 font-bold">★ {ratings}</div>
                </div>

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
      </div>
    </div>
  );
};

export default Games;
