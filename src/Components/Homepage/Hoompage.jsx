import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import GameCard from '../GameCard/GameCard';
import { useNavigate } from 'react-router';

const Hoompage = () => {

  const [games, setGames] = useState([]);
  const [searchItem,setSearchItem] =useState("")
  const navigate =useNavigate()
  

  useEffect(() => {
    fetch("/game.json")
      .then((res) => res.json())
        .then((data) => {
        
        const sorted = data.sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings));
        setGames(sorted);
      })
      .catch((err) => console.error("Error loading games:", err));
  }, []);
    const filteredGames = games.filter(
    (game) =>
      game.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      game.developer.toLowerCase().includes(searchItem.toLowerCase())
  );
    const handleViewDetails = (game) => {
    
    navigate(`/game/${game.id}`);
  };
 const handleClear = () => setSearchItem("");
    return (
        <div className= 'bg-base-300 pt-10 container mx-auto px-4'>
            
            <Banner/>
            {/* popular games section */}
            <h1 className='text-3xl mb-7 text-center mt-5 font-bold'>Most popular games </h1>
       <div className="relative w-full sm:w-1/2 mb-5 mx-auto">
      <input
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        placeholder="Search by title or developer..."
        className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {/* Cross Icon */}
      {searchItem && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
      )}
    </div>

          <div className="grid grid-cols-1 rounded sm:grid-cols-2  lg:grid-cols-3 gap-6">
        {filteredGames.slice(0, 6).map((game) => (
          <GameCard key={game.id} game={game} 
          handleViewDetails={() => handleViewDetails(game)}
          />
        ))}
      </div>

        </div>
    );
};

export default Hoompage;