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
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <input type="text" name="industry" placeholder="Industry" value={formData.industry} onChange={handleChange} required />
                <input type="text" name="stage" placeholder="Startup Stage" value={formData.stage} onChange={handleChange} required />
                <input type="number" name="fundingGoal" placeholder="Funding Goal" value={formData.fundingGoal} onChange={handleChange} required />
                <textarea name="description" placeholder="Startup Description" value={formData.description} onChange={handleChange} required></textarea>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default StartupSignup;