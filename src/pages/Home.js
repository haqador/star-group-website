import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-br from-pink-100 via-purple-200 to-indigo-300 min-h-screen p-10 text-center">
      <h1 className="text-5xl font-bold text-indigo-800 mb-6">Welcome to STAR GROUP</h1>
      <p className="text-xl text-gray-700 mb-6">A constellation of excellence across industries</p>
      <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231" alt="Star Group" className="mx-auto rounded-lg shadow-lg w-full max-w-3xl" />
    </div>
  );
}

export default Home;