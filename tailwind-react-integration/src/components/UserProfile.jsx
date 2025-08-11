import React from "react";

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="/profile.jpg"
        alt="User profile"
        className="w-36 h-36 rounded-full mx-auto object-cover"
      />
      <h1 className="text-xl text-blue-800 my-4 text-center">Jane Doe</h1>
      <p className="text-gray-600 text-base text-center">Frontend Developer</p>
    </div>
  );
}

export default UserProfile;
