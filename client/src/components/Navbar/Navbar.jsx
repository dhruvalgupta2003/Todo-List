import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../../assets/gnometodo_94637.png';

const Navbar = () => {
  // Initialize state for user login status and username
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear user data and set isLoggedIn to false
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('auth-token');
    // Redirect the user to the login page
    navigate('/login');
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">
          <img src={logo} alt="" className="h-[30px] w-[30px] bg-white" />
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          {/* Conditional rendering based on login status */}
          {isLoggedIn ? (
            <>
              <p className="text-white">Welcome, {username}</p>
              <button onClick={handleLogout} className="text-white">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/register" className="text-white">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
