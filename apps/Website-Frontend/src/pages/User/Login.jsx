import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/userSlice.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        try {
            const response = await axios.post("/api/auth/login", credentials);
            dispatch(loginUser(response.data.user)); // Store user in Redux
            alert("Login Successful!");
            localStorage.setItem("user", JSON.stringify(response.data.user)); 
            console.log(response.data);

            // Redirecting based on user role
            if (response.data.role === "investor") navigate("/investordashboard");
            else if (response.data.role === "startup") navigate("/startupdashboard");
            else if (response.data.role === "general") navigate("/contributordashboard");
            else navigate("/");
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Something went wrong");
            console.error("Login Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome</h2>
                <p className="text-gray-600 mb-6">We are happy to have you</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errorMessage && (
                        <div className="text-red-500 text-sm">
                            {errorMessage}
                        </div>
                    )}
                    <div className="flex justify-between items-center text-sm">
                        <a href="/entermail" className="text-blue-500 hover:underline">Forgot Password?</a>
                    </div>
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
                        ) : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
