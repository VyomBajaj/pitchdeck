import { useState } from "react";
import axios from "axios";

const ContributorSignup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    // Input change handler
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/users/signup", formData); // Vite proxy handle karega
            alert(response.data.message);
        } catch (error) {
            console.error("Error:", error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContributorSignup;