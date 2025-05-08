import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import StarAutomobiles from "./pages/StarAutomobiles";
import AhamedEnterprise from "./pages/AhamedEnterprise";
import JJIndustries from "./pages/JJIndustries";
import StarEngineering from "./pages/StarEngineering";
import StarITZone from "./pages/StarITZone";

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-gray-50">
        <nav className="bg-gradient-to-r from-indigo-600 to-pink-500 p-4 text-white shadow-xl">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">STAR GROUP</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:text-yellow-300">Home</Link>
              <Link to="/automobiles" className="hover:text-yellow-300">Automobiles</Link>
              <Link to="/ahamed" className="hover:text-yellow-300">Ahamed Enterprise</Link>
              <Link to="/jj-industries" className="hover:text-yellow-300">J & J</Link>
              <Link to="/engineering" className="hover:text-yellow-300">Engineering</Link>
              <Link to="/it-zone" className="hover:text-yellow-300">IT Zone</Link>
            </div>
          </div>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/automobiles" element={<StarAutomobiles />} />
            <Route path="/ahamed" element={<AhamedEnterprise />} />
            <Route path="/jj-industries" element={<JJIndustries />} />
            <Route path="/engineering" element={<StarEngineering />} />
            <Route path="/it-zone" element={<StarITZone />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
