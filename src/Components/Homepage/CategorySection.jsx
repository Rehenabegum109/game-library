import React from "react";
import { FaGamepad, FaBolt, FaPuzzlePiece, FaCar, FaCrosshairs, FaFootballBall, FaChess, FaGhost } from "react-icons/fa";

// Category Data with Icons
const categories = [
  { id: 1, name: "Action", icon: <FaBolt className="text-3xl" /> },
  { id: 2, name: "Adventure", icon: <FaGamepad className="text-3xl" /> },
  { id: 3, name: "Puzzle", icon: <FaPuzzlePiece className="text-3xl" /> },
  { id: 4, name: "Racing", icon: <FaCar className="text-3xl" /> },
  { id: 5, name: "Shooting", icon: <FaCrosshairs className="text-3xl" /> },
  { id: 6, name: "Sports", icon: <FaFootballBall className="text-3xl" /> },
  { id: 7, name: "Strategy", icon: <FaChess className="text-3xl" /> },
  { id: 8, name: "Horror", icon: <FaGhost className="text-3xl" /> },
];

const CategorySection = () => {
  return (
    <section className="py-16 px-4 bg-base-200">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Game Categories
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center gap-3 text-gray-800 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition cursor-pointer"
          >
            {category.icon}
            <span className="text-lg font-semibold">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
