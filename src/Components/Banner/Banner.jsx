import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Discover Popular Games",
    description: "Explore the top-rated games handpicked for you.",
    image: "https://plus.unsplash.com/premium_photo-1683140885544-c85fb8df705f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9wdWxhciUyMGdhbWVzfGVufDB8fDB8fHww",
  },
  {
    title: "Play Anywhere, Anytime",
    description: "Access your favorite games from desktop, tablet, or mobile.",
    image: "https://images.unsplash.com/photo-1737778866708-85d7896f3dda?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Join the Gaming Community",
    description: "Connect with other players and share your achievements.",
    image: "https://media.istockphoto.com/id/2199638052/photo/group-of-people-applauding.jpg?s=612x612&w=0&k=20&c=UHWKKVXltguTBrdK7kZbCkw3F6AWwTv3yE94mfftLo4=",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]   relative overflow-hidden mb-10 rounded-xl">
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current && (
            <motion.div
              key={index}
              className="absolute w-full h-full bg-cover bg-center flex items-center justify-center rounded-xl"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

              {/* Text content */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 1 }}
                className="relative text-center text-white px-4 max-w-2xl"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-sm md:text-lg">{slide.description}</p>
              </motion.div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};

export default Banner;
