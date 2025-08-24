import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Advanced React Router Demo</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Features Demonstrated:</h2>
          <ul className="space-y-2">
            <li>✅ Nested Routes (Profile with sub-sections)</li>
            <li>✅ Dynamic Routes (Blog posts with variable URLs)</li>
            <li>✅ Protected Routes (Authentication required)</li>
            <li>✅ Navigation with active states</li>
            <li>✅ Context-based authentication</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Try These Features:</h2>
          <div className="space-y-2">
            <div>
              <Link to="/blog" className="text-blue-600 hover:underline">
                Browse Blog Posts
              </Link>
              <p className="text-sm text-gray-600">See dynamic routing in action</p>
            </div>
            <div>
              <Link to="/login" className="text-blue-600 hover:underline">
                Login to Access Profile
              </Link>
              <p className="text-sm text-gray-600">Experience protected routes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;