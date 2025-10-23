import React, { useEffect, useState } from 'react';


const Banner = () => {
    const [banners, setBanners] = useState([]);
    const [current,setCurrent] =useState(0)
      
     useEffect(() => {
    fetch("/banner.json")
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners]);
    return (
       <div className="relative pt-10 w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-5">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">{banner.title}</h2>
            <p className="text-lg md:text-xl max-w-2xl">{banner.subtitle}</p>

                  <button
              className="px-6 py-3 mt-8 bg-blue-600  text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105 active:scale-95"
              
            >
              Explore Now
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;