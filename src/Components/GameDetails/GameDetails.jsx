import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";

const GameDetails = () => {
  const { id } = useParams();
  const gamesData = useLoaderData();
  const navigate = useNavigate();

  const game = gamesData.find((g) => g.id.toString() === id);

  if (!game) return <div>Game not found!</div>;

  const handleInstall = () => {
    if (game.downloadLink) {
      toast.success(
        <div className="flex items-center gap-2">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-10 h-10 rounded-md"
          />
          <span>"{game.title}" Installed Successfully!</span>
        </div>,
        {
          autoClose: 2000,
          onClose: () => navigate("/"), 
        }
      );
    } else {
      toast.error("❌ Download link not available for this game.", {
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="bg-base-200 min-h-screen pt-10 flex flex-col items-center gap-10 px-4">
      {/* Cover Photo */}
      <img
        className="w-full max-w-5xl rounded-xl shadow-lg object-cover"
        src={game.coverPhoto}
        alt={game.title}
      />

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-5xl">
        {/* Main Card */}
        <div className="bg-white flex-1 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
          <p className="mb-4">{game.description}</p>
          <p className="mb-2">
            <span className="font-bold">Category:</span> {game.category}
          </p>
          <p className="mb-2">
            <span className="font-bold">Developer:</span> {game.developer}
          </p>
          <p className="mb-2">
            <span className="font-bold">Ratings:</span> {game.ratings}
          </p>
          <p className="mb-2">
            <span className="font-bold">Download Link:</span>{" "}
            {game.downloadLink || "Not Available"}
          </p>
        </div>

        {/* Install Card */}
        <div className="bg-white flex-1 p-6 rounded-lg shadow-md flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-2 text-center">Install This Game</h2>

          <div>
            <label className="block font-semibold mb-1">Game Name</label>
            <input
              type="text"
              value={game.title}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Download Link</label>
            <input
              type="text"
              value={game.downloadLink || "Not Available"}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          <button
            onClick={handleInstall}
            className={`btn w-full mt-2 ${
              game.downloadLink ? "btn-success" : "btn-disabled"
            }`}
          >
            🚀 Install
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
