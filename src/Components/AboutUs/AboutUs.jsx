import React from "react";
import { FaUsers, FaRocket, FaHeart, FaTrophy, FaGlobe } from "react-icons/fa";
import { Link } from "react-router";

const AboutUs = () => {


  const values = [
    { id: 1, title: "Innovation", description: "We bring the latest games and features to our users.", icon: <FaRocket className="text-4xl text-green-500 mb-4" /> },
    { id: 2, title: "Community", description: "Connecting gamers worldwide with shared interests.", icon: <FaUsers className="text-4xl text-green-500 mb-4" /> },
    { id: 3, title: "Passion", description: "Gaming is our passion and we aim to deliver the best.", icon: <FaHeart className="text-4xl text-green-500 mb-4" /> },
  ];

  const achievements = [
    { id: 1, title: "5000+ Users Worldwide", icon: <FaGlobe className="text-4xl text-green-500 mb-2" /> },
    { id: 2, title: "50+ Top Games", icon: <FaTrophy className="text-4xl text-green-500 mb-2" /> },
  ];

  return (
    <div className="w-full bg-gray-200 h-fit">

      {/* Hero Section */}
      <section className="pt-20  px-6 sm:px-12 text-center ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              Welcome to our Game Library – the hub for gamers to discover, explore, and enjoy top-rated games worldwide.We are passionate about creating a community-driven platform that connects players, developers, and enthusiasts.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/2167075113/photo/caucasian-teenager-plays-3d-third-person-shooter-on-computer.jpg?s=612x612&w=0&k=20&c=9gxambqah7wjTmrAoOC6ZWKSSIWsTDhf_tHnNk83SC8="
              alt="Gaming"
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6 sm:px-12 max-w-5xl mx-auto text-center ">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed ">
          Our mission is to create the ultimate game library experience, where gamers can explore, discover, and enjoy top-rated games all in one place.We aim to provide a seamless, fun, and engaging platform for all, with constant updates and exciting new features.
          </p>
        
      </section>

      {/* Achievements */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-center pb-10">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
          {achievements.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              {item.icon}
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.id} className="bg-white rounded-3xl shadow-lg p-8 text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              {value.icon}
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
 {/* Call to Action */}
      <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Games?</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Join our community and discover thousands of exciting games today!
        </p>
         <Link
    to="/games"
    className="bg-white text-green-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition inline-block"
  >
    Explore Games
  </Link>
      </section>

    </div>
  );
};

export default AboutUs;
