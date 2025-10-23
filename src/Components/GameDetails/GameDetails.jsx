import React from "react";
import { useLoaderData, useParams } from "react-router";


const GameDetails = () => {
  const { id } = useParams();
  const gamesData =useLoaderData()
  console.log("Game ID:", id); 

  const game = gamesData.find((g) => g.id.toString() === id);

  if (!game) return <div>Game not found!</div>;

  return (
    <div className="bg-base-300 min-h-full pt-10 flex justify-center items-center">
        <div className="bg-white w-[700px] p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300  mb-10 flex flex-col justify-between cursor-pointer">
      
      <img className='w-full  rounded-lg items-center' src={game.coverPhoto} alt={game.title}/>
      <h1 className="text-2xl mt-5 mb-5 font-bold">{game.title}</h1>
      <p >{game.description}</p>
      <p className="mt-5 "><span className="font-bold "> Category</span> :{game.category} </p>
      <p><span  className="font-bold">Developer </span> : {game.developer}</p>
      <p ><span className="font-bold"> Ratings </span>: {game.ratings}</p>
      <p><span className="font-bold"> DownloadLInk </span>: {game.downloadLink}</p>
    </div>
    </div>
  );
};

export default GameDetails;
