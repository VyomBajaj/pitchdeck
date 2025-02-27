import { useState } from 'react';

export default function StartupPrediction() {
  const [prediction, setPrediction] = useState(null);

  const handlePredict = () => {
    // Hardcoded input values
    const location = 3;  // Example Location
    const market = 5;    // Example Market
    const totalRaised = 1000000;  // Example Total Raised
    const employees = 30;  // Example Employees
    const fundingPerEmployee = totalRaised / employees;
    const companyAge = 10; // Example Company Age

    // Placeholder for prediction logic
    const result = "Startup Success: 1 (Likely to get funded)";
    setPrediction(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 flex items-center justify-center">
      <div className="w-[400px] p-8 bg-blue-600 rounded-lg shadow-lg text-white">
        <h2 className="text-center text-2xl font-bold mb-6">Startup Funding Prediction</h2>
        <div className="space-y-4">
          <label>Location</label>
          <input placeholder="Location" defaultValue="3" className="w-full p-3 rounded-lg bg-blue-700 text-white placeholder-white border border-blue-400" />
          <label>Market</label>
          <input placeholder="Market" defaultValue="5" className="w-full p-3 rounded-lg bg-blue-700 text-white placeholder-white border border-blue-400" />
          <label>Total Raised ($)</label>
          <input placeholder="Total Raised ($)" defaultValue="1000000" className="w-full p-3 rounded-lg bg-blue-700 text-white placeholder-white border border-blue-400" />
          <label>Employees</label>
          <input placeholder="Employees" defaultValue="30" className="w-full p-3 rounded-lg bg-blue-700 text-white placeholder-white border border-blue-400" />
          <label>Company Age</label>
          <input placeholder="Company Age" defaultValue="10" className="w-full p-3 rounded-lg bg-blue-700 text-white placeholder-white border border-blue-400" />
        </div>
        <button onClick={handlePredict} className="w-full mt-6 p-3 bg-green-500 rounded-lg hover:bg-green-400 text-black font-bold">
          Predict
        </button>
        {prediction && <p className="text-center text-yellow-400 font-bold mt-6">{prediction}</p>}
      </div>
    </div>
  );
}
