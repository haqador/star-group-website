import React from "react";

function StarAutomobiles() {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-red-100 to-pink-100 min-h-screen p-10 text-center">
      <h1 className="text-4xl font-bold text-red-700 mb-4">Star Automobiles</h1>
      <img src="https://images.unsplash.com/photo-1608222351219-18e4cc1df7d9" alt="Car showroom" className="mx-auto mb-6 rounded shadow-lg w-full max-w-2xl" />
      <p className="text-lg text-gray-800">We import the finest vehicles from Japan and Europe, blending luxury with performance.</p>
    </div>
  );
}

export default StarAutomobiles;