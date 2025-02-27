import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InvestorSignup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        investmentStage: "",
        investmentAmount: "",
        industries: ""
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        try {
            const response = await axios.post("/api/users/signup", formData);
            alert(response.data.message);
            navigate("/investordashboard");
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Something went wrong");
            console.error("Signup Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Investor Sign Up</h2>
                <p className="text-gray-600 mb-6">Join us to explore the opportunities</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="investmentStage"
                        placeholder="Investment Stage"
                        value={formData.investmentStage}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        name="investmentAmount"
                        placeholder="Investment Amount"
                        value={formData.investmentAmount}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="industries"
                        placeholder="Industries"
                        value={formData.industries}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errorMessage && (
                        <div className="text-red-500 text-sm">
                            {errorMessage}
                        </div>
                    )}
                    <button
                        type="submit"
                        className={`w-full py-2 text-white rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="flex justify-center">
                                <span className="mr-2">Loading...</span>
                                <div className="animate-spin h-5 w-5 border-4 border-t-transparent border-white rounded-full"></div>
                            </div>
                        ) : 'Sign Up'}
                    </button>
                </form>
                <div className="mt-4 text-sm text-center">
                    <p className="text-gray-600">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default InvestorSignup;