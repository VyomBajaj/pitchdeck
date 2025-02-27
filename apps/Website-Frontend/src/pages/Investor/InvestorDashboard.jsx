import React, { useState } from "react";
import InvestorNavbar from "../Investor/InvestorNavbar";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const dataPie = [
  { name: "AI", value: 40 },
  { name: "Fintech", value: 25 },
  { name: "Healthcare", value: 20 },
  { name: "E-commerce", value: 15 },
];

const dataBar = [
  { name: "Jan", Startups: 30 },
  { name: "Feb", Startups: 50 },
  { name: "Mar", Startups: 20 },
  { name: "Apr", Startups: 40 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const startups = [
  { name: "Startup 1", description: "Description 1", img: "https://via.placeholder.com/150" },
  { name: "Startup 2", description: "Description 2", img: "https://via.placeholder.com/150" },
  { name: "Startup 3", description: "Description 3", img: "https://via.placeholder.com/150" },
];

const InvestorDashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStartup = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % startups.length);
  };

  const prevStartup = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + startups.length) % startups.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white">
      <InvestorNavbar />
      <div className="grid grid-cols-4 gap-4 p-8">
        {/* Left Sidebar Analytics */}
        <div className="col-span-1 space-y-8 bg-blue-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-center">Trending Domains</h2>
          <PieChart width={250} height={250}>
            <Pie data={dataPie} cx={125} cy={125} outerRadius={80} fill="#8884d8" dataKey="value" label>
              {dataPie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <h2 className="text-xl font-bold text-center">Monthly Startups</h2>
          <BarChart width={250} height={200} data={dataBar}>
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Startups" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Carousel for Startups */}
        <div className="col-span-2 flex flex-col items-center justify-center space-y-6">
          <div className="bg-blue-600 p-10 rounded-lg shadow-lg w-3/4 text-center relative">
            <FaChevronLeft className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" size={30} onClick={prevStartup} />
            <img src={startups[currentIndex].img} alt="Startup Thumbnail" className="mx-auto mb-4 rounded-lg" />
            <h2 className="text-2xl font-bold mb-4">{startups[currentIndex].name}</h2>
            <p className="mb-6">{startups[currentIndex].description}</p>
            <FaChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" size={30} onClick={nextStartup} />
          </div>
        </div>

        {/* Right Sidebar Top Investors & Startups */}
        <div className="col-span-1 bg-blue-700 p-6 rounded-lg shadow-lg space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Top 10 Startups</h2>
            <ul className="space-y-2">
              {Array.from({ length: 10 }, (_, i) => (
                <li key={i}>Startup {i + 1}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-center py-4 mt-8">
        <p>&copy; 2025 PitchDeck. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default InvestorDashboard;
