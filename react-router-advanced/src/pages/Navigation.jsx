import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              `hover:text-blue-200 ${isActive ? 'font-bold text-blue-200' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              `hover:text-blue-200 ${isActive ? 'font-bold text-blue-200' : ''}`
            }
          >
            Blog
          </NavLink>
          {isAuthenticated && (
            <NavLink 
              to="/profile" 
              className={({ isActive }) => 
                `hover:text-blue-200 ${isActive ? 'font-bold text-blue-200' : ''}`
              }
            >
              Profile
            </NavLink>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span>Welcome, {user.username}!</span>
              <button 
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              className="bg-green-500 hover:bg-green-700 px-3 py-1 rounded"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;