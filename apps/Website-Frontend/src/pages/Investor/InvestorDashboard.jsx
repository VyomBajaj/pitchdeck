import React, { useState, useEffect } from "react";
import axios from "axios";
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

const InvestorDashboard = () => {
  const [startups, setStartups] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const response = await axios.get("/api/getStart/getStartup");
        setStartups(response.data);
      } catch (error) {
        console.error("Error fetching startups:", error);
      }
    };

    fetchStartups();
  }, []);

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
          {startups.length > 0 ? (
            <div className="bg-blue-600 p-10 rounded-lg shadow-lg w-3/4 text-center relative">
              <FaChevronLeft className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" size={30} onClick={prevStartup} />
              <img
                src={startups[currentIndex]?.img || "data:image/jpeg;base64,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"}
                alt="Startup Thumbnail"
                className="mx-auto mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-bold mb-4">{startups[currentIndex]?.name || "Startup Name"}</h2>
              <p className="mb-6">{startups[currentIndex]?.description || "Description not available"}</p>
              <FaChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" size={30} onClick={nextStartup} />
            </div>
          ) : (
            <p>Loading Startups...</p>
          )}
        </div>

        {/* Right Sidebar Top Investors & Startups */}
        <div className="col-span-1 bg-blue-700 p-6 rounded-lg shadow-lg space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Top 10 Startups</h2>
            <ul className="space-y-2">
              {startups.length > 0 ? (
                startups.slice(0, 10).map((startup, i) => (
                  <li key={i}>{startup.name}</li>
                ))
              ) : (
                <p>Loading...</p>
              )}
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