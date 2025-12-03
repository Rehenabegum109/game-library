

import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import GameCard from '../GameCard/GameCard';
import { useNavigate } from 'react-router';
import HowToPlay from './HowToPlay';
import Newsletter from './Newsletter';
import FeaturedSection from './CategorySection';
import CategorySection from './CategorySection';


const Hoompage = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  // Fetch games and sort by rating descending
  useEffect(() => {
    fetch("/game.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings));
        setGames(sorted);
      })
      .catch((err) => console.error("Error loading games:", err));
  }, []);

  const handleViewDetails = (game) => {
    navigate(`/game/${game.id}`);
  };
    const handleSeeAllGames = () => {
    navigate("/games");
  };

  // Top 3 popular games
  const popularGames = games.slice(0, 4);

  return (
    <div className='bg-base-300 pt-10 container mx-auto px-6 lg:px-12'>
      
      {/* Banner */}
      <Banner />

      {/* Popular Games Section */}
      <section className="mb-10 mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {popularGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              handleViewDetails={() => handleViewDetails(game)}
            />
          ))}
        </div>
        
      </section>
 <div className="flex justify-center mb-5">
    <button
      onClick={handleSeeAllGames}
      className="btn bg-green-500 text-2xl text-white font-semibold px-6 py-3 rounded-lg"
    >
      See All Games
    </button>
  </div>
  <CategorySection/>


      <HowToPlay/>
      <Newsletter/>
    </div>
  );
};

export default Hoompage;
