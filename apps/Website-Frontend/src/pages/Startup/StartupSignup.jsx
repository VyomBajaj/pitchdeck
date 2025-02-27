import { useState } from "react";
import axios from "axios";

const StartupSignup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        industry: "",
        stage: "",
        fundingGoal: "",
        description: ""
    });

    // Input change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Form Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/users/signup", formData);
            alert(response.data.message);
        } catch (error) {
            console.error("Error:", error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">Sign Up as a Startup</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input className="w-full p-3 border rounded-md" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <input className="w-full p-3 border rounded-md" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input className="w-full p-3 border rounded-md" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <input className="w-full p-3 border rounded-md" type="text" name="industry" placeholder="Industry" value={formData.industry} onChange={handleChange} required />
                    <input className="w-full p-3 border rounded-md" type="text" name="stage" placeholder="Startup Stage" value={formData.stage} onChange={handleChange} required />
                    <input className="w-full p-3 border rounded-md" type="number" name="fundingGoal" placeholder="Funding Goal" value={formData.fundingGoal} onChange={handleChange} required />
                    <textarea className="w-full p-3 border rounded-md" name="description" placeholder="Startup Description" value={formData.description} onChange={handleChange} required></textarea>
                    <button className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default StartupSignup;