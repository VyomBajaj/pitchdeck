import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider.jsx"; // ✅ Correct usage
import { FaUserCircle } from "react-icons/fa"; 
import Cookies from "js-cookie";

const NavBar = () => {
    const { user, setUser, isLoading } = useAuth(); // ✅ Auth state correctly accessed
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("token"); 
        Cookies.remove("accessToken");
        window.location.href = "/login"; 
    };

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 shadow-lg backdrop-blur-md w-full">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
                <div className="text-white text-2xl font-bold">PitchDeck</div>

                <ul className="flex items-center space-x-6 md:space-x-8">
                    <li><Link to="/" className="text-white font-medium hover:text-blue-300 transition duration-200">Home</Link></li>
                    <li><Link to="/about" className="text-white font-medium hover:text-blue-300 transition duration-200">About Us</Link></li>
                    <li><Link to="/contact" className="text-white font-medium hover:text-blue-300 transition duration-200">Contact Us</Link></li>
                    <li><Link to="/communityPage" className="text-white font-medium hover:text-blue-300 transition duration-200">Community</Link></li>
                    <li><Link to="/faq" className="text-white font-medium hover:text-blue-300 transition duration-200">FAQs</Link></li>
                </ul>

                <div className="flex items-center space-x-4 md:space-x-6">
                    {isLoading ? (
                        <span className="text-white">Loading...</span> 
                    ) : !user ? (
                        <Link to="/Signup" className="text-white font-medium hover:text-blue-300 transition duration-200">
                            Login/SignUp
                        </Link>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <Link to={`/user/${user._id}`} className="flex items-center text-white font-medium hover:text-blue-300 transition duration-200">
                                <FaUserCircle className="text-2xl" />
                                <span className="ml-2">Hello, {user.firstname}</span>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-white font-medium hover:text-blue-300 transition duration-200"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;