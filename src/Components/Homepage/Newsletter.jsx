import React, { useState } from "react";

import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address!");
      return;
    }

    toast.success("✅ You’ve successfully subscribed to our newsletter!");
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-blue-800 to-indigo-900 py-16 pb-10  text-white rounded-xl mt-16">
      <div className="container mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white p-4 rounded-full">
            <HiMail className="text-blue-700 text-4xl" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-3"
        >
          Stay Updated with Game News!
        </motion.h2>

        {/* Subtitle */}
        <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
          Join our newsletter to get the latest game updates, developer stories, and special offers.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
            className="p-3 rounded-lg sm:rounded-l-lg text-green-500 bg-white flex-1 w-full"
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg sm:rounded-r-lg font-semibold transition-transform transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
