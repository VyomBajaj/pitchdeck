import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // ✅ User Details Fetch Karne Ka Function
    const fetchUser = async () => {
        try {
            const response = await axios.get("/api/auth/user-details", {
                withCredentials: true, // ✅ Cookies send karega
            });
    
            setUser(response.data); // ✅ User data set kar diya
        } catch (error) {
            console.error("Auth Error:", error);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    // 🔥 Jab Page Load Ho, Tab API Call Ho
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, isLoading, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);