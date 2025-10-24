import React from 'react';

const HowToPlay = () => {
  const steps = [
    {
      title: "Step 1: Choose a Game",
      description: "Browse our collection and select the game you want to play."
    },
    {
      title: "Step 2: Read Instructions",
      description: "Each game has a brief guide to help you get started quickly."
    },
    {
      title: "Step 3: Start Playing",
      description: "Click 'Play' and enjoy the game directly in your browser."
    },
    {
      title: "Step 4: Share & Compete",
      description: "Share your scores with friends and compete for the top spot!"
    }
  ];

  return (
    <section className="bg-gray-300 py-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-10">How to Play</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
