import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍴 Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example recipe card */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform">
          <img
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
            alt="Spaghetti Carbonara"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Spaghetti Carbonara</h2>
            <p className="text-gray-600 text-sm mt-2">
              A classic Italian pasta dish with eggs, cheese, bacon, and black
              pepper.
            </p>
          </div>
        </div>

        {/* Add more recipe cards here */}
      </div>
    </div>
  );
}

export default HomePage;
